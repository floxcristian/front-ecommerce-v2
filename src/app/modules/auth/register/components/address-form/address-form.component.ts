// Angular
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
import { AddressInputComponent } from '@shared/components/atomic/address-input/address-input.component';
// Components
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { DropdownModule } from 'primeng/dropdown';
// Rxjs
import { filter, map, Observable } from 'rxjs';

const NG_MODULES = [
  ReactiveFormsModule,
  GoogleMapsModule,
  MapMarker,
  CommonModule,
];
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
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES, ...COMPONENTS, ...DIRECTIVES],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent implements AfterViewInit, OnInit {
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

  get searchField() {
    return this.addressForm.controls['search'];
  }

  constructor(
    private readonly fb: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: object,
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
      region: [null, Validators.required],
      locality: [null, Validators.required],
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
    console.log('OK');
    //this.onSubmit.emit(value);
  }

  onMapReady() {
    this.isMapLoaded.set(true);
  }

  changeAddress(placeId: string): void {
    this.getGeocode({ placeId }).subscribe((result) => {
      if (!result) return;
      if (!result) {
        this.setInvalidAddress();
        return;
      }
      this.setAddress(result.address_components);
      this.setMarker(result.geometry.location);
    });
  }

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
      this.setAddress(result.address_components, true);
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
    addressComponents: google.maps.GeocoderAddressComponent[],
    setSearch?: boolean
  ): void {
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
    const formFieldValues = { street, number, locality, commune, region };
    const formValues = setSearch
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
      const regions = communes.reduce((acc, commune) => {
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
      }, {});
      /*const _communes = communes.reduce((acc, commune) => {
        if(!acc[commune.regionCode]) acc[commune.regionCode] = [];
        return acc;
      }, {});*/
      console.log('regions: ', Object.values(regions));

      this.communes.set(communes);
      this.isLoadingCommunes.set(false);
    });
  }
}
