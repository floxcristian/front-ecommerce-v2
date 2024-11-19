// Angular
import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  input,
  OnInit,
  output,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMapsModule, MapMarker, MapGeocoder } from '@angular/google-maps';
// Environment
import { environment } from '@env/environment';
// Services
import { GeolocationService } from '@core/api/geolocation/geolocation.service';
// Directives
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { ControlErrorContainerDirective } from '@shared/directives/validation-message/directives/control-error-container/control-error-container.directive';
// Components
import { AddressInputComponent } from '@shared/components/atomic/address-input/address-input.component';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { DropdownModule } from 'primeng/dropdown';
// Rxjs
import { filter, map } from 'rxjs';
// Utils
import { removeSpecialCharacters } from './utils';

const NG_MODULES = [ReactiveFormsModule, GoogleMapsModule, MapMarker];
const PRIME_MODULES = [
  InputTextModule,
  ButtonModule,
  RippleModule,
  InputTextareaModule,
  CheckboxModule,
  SkeletonModule,
  DropdownModule,
];
const COMPONENTS = [AddressInputComponent];
const DIRECTIVES = [
  FormSubmitDirective,
  ControlErrorsDirective,
  ControlErrorContainerDirective,
];

@Component({
  selector: 'app-address-step',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS, DIRECTIVES],
  templateUrl: './address-step.component.html',
  styleUrl: './address-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressStepComponent implements AfterViewInit, OnInit {
  accountType = input.required<string>();
  steps = input.required<number>();
  onGoBack = output<void>();
  onSubmit = output<any>();

  addressForm!: FormGroup;
  center!: google.maps.LatLngLiteral;

  isMapLoaded = signal<boolean>(false);
  options = signal<google.maps.MapOptions>({
    zoom: 4,
    mapId: '473f291830f1a34c',
    center: environment.defaultMapCenter,
  });

  markerPositions = signal<google.maps.marker.AdvancedMarkerElement[]>([]);
  placesService!: google.maps.places.PlacesService;
  advancedMarkerElement!: typeof google.maps.marker.AdvancedMarkerElement;
  regions = signal<any[]>([]);
  communes = signal<any[]>([]);
  localities = signal<any[]>([]);
  isLoadingCommunes = signal<boolean>(true);
  manualMapAddress = signal<string>('');

  get searchField() {
    return this.addressForm.controls['search'];
  }

  get streetField() {
    return this.addressForm.controls['street'];
  }

  get numberField() {
    return this.addressForm.controls['number'];
  }

  get communeField() {
    return this.addressForm.controls['commune'];
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private readonly fb: FormBuilder,
    private geocoder: MapGeocoder,
    private readonly geolocationService: GeolocationService
  ) {
    this.center = environment.defaultMapCenter;
    this.buildForm();
  }

  private buildForm(): void {
    this.addressForm = this.fb.group({
      search: [null],
      street: [null, Validators.required],
      number: [null, Validators.required],
      commune: [null, Validators.required],
      region: [null],
      locality: [null, Validators.required],
      latitude: [null],
      longitude: [null],
      department: [null],
      reference: [null],
      newsletter: [false],
      disclaimer: [false, [Validators.requiredTrue]],
    });
  }

  ngOnInit(): void {
    this.fetchCommunes();
  }

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    await this.initGooglePlacesService();
  }

  private async initGooglePlacesService(): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;
    this.advancedMarkerElement = AdvancedMarkerElement; // Guardamos la referencia a la clase
  }

  submit(value: any): void {
    if (this.addressForm.valid) {
      this.onSubmit.emit(value);
    } else {
      this.addressForm.markAllAsTouched();
    }
  }

  onMapReady(): void {
    this.isMapLoaded.set(true);
  }

  changeAddress(placeId: string): void {
    this.getGeocode({ placeId }).subscribe((result) => {
      if (!result) return;
      if (!result) {
        this.setInvalidAddress();
        return;
      }
      this.setAddress(result);
      this.setMarker(result.geometry.location);
    });
  }

  /**
   * Al arrastrar el marcador en el mapa, obtener la dirección de la ubicación y setear los campos del formulario.
   * @param event
   * @returns
   */
  onDragEnd(event: google.maps.MapMouseEvent): void {
    if (!event.latLng) {
      this.addressForm.patchValue({ search: null });
      return;
    }
    this.getGeocode({ location: event.latLng }).subscribe((result) => {
      if (!result) {
        // Setear un error en el search field
        this.searchField.setErrors({ addressInvalid: true });
        this.setInvalidAddress();
        return;
      }
      this.setAddress(result, true);
    });
  }

  private getGeocode({
    placeId,
    location,
  }: {
    placeId?: string;
    location?: google.maps.LatLng;
  }) {
    if (!placeId && !location) {
      throw new Error('PlaceId or location is required.');
    }
    const geoCodeParams = placeId ? { placeId } : { location };
    return this.geocoder.geocode(geoCodeParams).pipe(
      filter(
        ({ status, results }) =>
          status === google.maps.GeocoderStatus.OK && results.length > 0
      ),
      map(({ results }) => {
        const response = results.filter(
          (value) =>
            value.types.includes('street_address') ||
            value.types.includes('premise')
        );
        console.log('geocode: ', response);
        return response.length ? response[0] : null;
      })
    );
  }

  setInvalidAddress(): void {
    this.addressForm.patchValue({
      search: null,
      street: null,
      number: null,
      commune: null,
      region: null,
      locality: null,
      latitude: null,
      longitude: null,
    });
  }

  /**
   * Setear marcadore en el mapa y centrar el mapa en la ubicación del marcador.
   * @param location
   **/
  private setMarker(location: google.maps.LatLng): void {
    const marker = new this.advancedMarkerElement({
      position: location,
    });
    this.markerPositions.set([marker]);
    this.center = location.toJSON();
    this.options.update((value) => ({
      ...value,
      zoom: 17,
      center: location.toJSON(),
    }));
  }

  private setAddress(
    geocodeItem: google.maps.GeocoderResult,
    setSearchField?: boolean
  ): void {
    const { lat, lng } = geocodeItem.geometry.location.toJSON();
    const addressComponents = geocodeItem.address_components;
    const street = this.getAddressItem(addressComponents, 'route');
    const number = this.getAddressItem(addressComponents, 'street_number');
    const commune = this.getAddressItem(
      addressComponents,
      'administrative_area_level_3'
    );
    const region = this.getAddressItem(
      addressComponents,
      'administrative_area_level_1'
    );
    const country = this.getAddressItem(addressComponents, 'country');
    const locality = this.getAddressItem(addressComponents, 'locality');
    const formattedStrett = [street, number].filter(Boolean).join(' ');
    const formmatedCommune =
      locality === commune ? [commune] : [locality, commune];
    const formattedAddress = [formattedStrett, ...formmatedCommune, country]
      .filter(Boolean)
      .join(', ');
    const communeId = this.getCommuneByGoogleCommune(commune);
    const formFieldValues = {
      street,
      number,
      //locality,
      commune: communeId,
      latitude: lat,
      longitude: lng,
      region,
    };
    const formValues = setSearchField
      ? { search: formattedAddress, ...formFieldValues }
      : formFieldValues;

    this.addressForm.patchValue(formValues);
  }

  /**
   * Obtener la información de la dirección a partir de los componentes de la dirección.
   * @param addressComponents Componentes de dirección.
   * @param type Tipo de componente de dirección.
   * @returns Información del componente de dirección.
   * */
  private getAddressItem(
    addressComponents: google.maps.GeocoderAddressComponent[],
    type: string
  ): string {
    const itemExists = addressComponents.find((value) =>
      value.types.includes(type)
    );
    return itemExists?.long_name || '';
  }

  private fetchCommunes(): void {
    this.geolocationService.getCommunes().subscribe((communes) => {
      console.log('communes: ', communes);
      // Agrupar comunas por región
      /*const regions = communes.reduce((acc, commune) => {
        if (!acc[commune.regionCode])
          acc[commune.regionCode] = {
            id: commune.regionCode,
            name: 'name',
            communes: [],
          };
        acc[commune.regionCode].communes.push({
          id: commune.id,
          name: commune.city,
          localities: (commune.localities as any[]).map((locality) => ({
            id: locality.id,
            name: locality.location,
          })),
        });
        return acc;
      }, {});*/
      /*const _communes = communes.reduce((acc, commune) => {
        if(!acc[commune.regionCode]) acc[commune.regionCode] = [];
        return acc;
      }, {});*/
      //console.log('regions: ', Object.values(regions));

      this.communes.set(communes);
      this.isLoadingCommunes.set(false);
    });
  }

  /**
   * Método temporal para simular funcionamiento ecommerce antiguo.
   * @param value
   * @returns
   */
  private getCommuneByGoogleCommune(value: string): string {
    if (!value) return '';
    const formmatedValue = removeSpecialCharacters(value);
    const communeItem = this.communes().find(
      (commune) => removeSpecialCharacters(commune.city) === formmatedValue
    );
    if (!communeItem) return '';
    this.setLocality(communeItem.localities, value);
    return communeItem.id;
  }

  /**
   * Método temporal para simular funcionamiento ecommerce antiguo.
   */
  private setLocality(localities: any[], commune: string) {
    const formmatedCommune = removeSpecialCharacters(commune);
    if (!formmatedCommune) return;
    const itemLocality = localities.find(
      (item) => removeSpecialCharacters(item.location) === formmatedCommune
    );
    if (!itemLocality) return;
    this.addressForm.controls['locality'].setValue(itemLocality.location);
  }

  setAddressManually(): void {
    if (
      !this.streetField.value ||
      !this.numberField.value ||
      !this.communeField.value
    )
      return;
    console.log('setAddressManually');
    // Pasar al mapa
  }

  setCommuneManually(): void {
    if (!this.communeField.value) return;
    const communeItem = this.communes().find(
      (commune) => commune.id === this.communeField.value
    );
    if (!communeItem) return;
    this.setLocality(communeItem.localities, communeItem.city);
  }
}
