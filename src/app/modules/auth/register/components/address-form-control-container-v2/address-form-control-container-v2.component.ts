// Angular
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  Inject,
  input,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMapsModule, MapGeocoder } from '@angular/google-maps';
// PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
// Environment
import { environment } from '@env/environment';
// Rxjs
import { filter, map } from 'rxjs';
// Components
import { AddressInputComponent } from '@shared/components/atomic/address-input/address-input.component';
// Services
import { GeolocationService } from '@core/api/geolocation/geolocation.service';
// Directives
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { removeSpecialCharacters } from './utils';
import { MapComponent } from '@shared/components/blocks/map/map.component';

const NG_MODULES = [ReactiveFormsModule, GoogleMapsModule, CommonModule];
const PRIME_MODULES = [
  InputTextModule,
  InputTextareaModule,
  SkeletonModule,
  DropdownModule,
];
const COMPONENTS = [AddressInputComponent, MapComponent];
const DIRECTIVES = [ControlErrorsDirective];

@Component({
  selector: 'app-address-form-control-container-v2',
  standalone: true,
  imports: [NG_MODULES, COMPONENTS, PRIME_MODULES, DIRECTIVES],
  templateUrl: './address-form-control-container-v2.component.html',
  styleUrl: './address-form-control-container-v2.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
})
export class AddressFormControlContainerV2Component
  implements OnInit, AfterViewInit
{
  @ViewChild(MapComponent) mapComponent!: MapComponent;

  formGroupName = input<string>();
  useMap = input<boolean>(true);

  /*center!: google.maps.LatLngLiteral;

  isMapLoaded = signal<boolean>(false);
  options = signal<google.maps.MapOptions>({
    zoom: 4,
    mapId: '473f291830f1a34c',
    center: environment.defaultMapCenter,
  });
  advancedMarkerElement!: typeof google.maps.marker.AdvancedMarkerElement;

  markerPositions = signal<google.maps.marker.AdvancedMarkerElement[]>([]);*/
  communes = signal<any[]>([]);
  isLoadingCommunes = signal<boolean>(true);

  // Formularios:
  parentForm!: FormGroup;

  get searchField() {
    return this.formGroupName()
      ? this.parentForm.get(`${this.formGroupName()}.search`)
      : this.parentForm.get('search');
  }

  get streetField() {
    return this.formGroupName()
      ? this.parentForm.get(`${this.formGroupName()}.street`)
      : this.parentForm.get('street');
  }

  get numberField() {
    return this.formGroupName()
      ? this.parentForm.get(`${this.formGroupName()}.number`)
      : this.parentForm.get('number');
  }

  get communeField() {
    return this.formGroupName()
      ? this.parentForm.get(`${this.formGroupName()}.commune`)
      : this.parentForm.get('commune');
  }

  get addressForm(): FormGroup | null {
    if (this.formGroupName()) {
      return this.parentForm.get(this.formGroupName() as string) as FormGroup;
    }
    return this.parentForm;
  }

  controlContainer = inject(ControlContainer);
  private readonly fb = inject(FormBuilder);

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private geocoder: MapGeocoder,
    private readonly geolocationService: GeolocationService
  ) {
    //this.center = environment.defaultMapCenter;
  }

  ngOnInit(): void {
    this.parentForm = this.controlContainer.control as FormGroup;
    this.fetchCommunes();
    if (this.formGroupName()) {
      this.addNestedFormGroup();
    } else {
      this.setFormGroup();
    }
  }

  private addNestedFormGroup(): void {
    const formGroupName = this.formGroupName() as string;
    const childGroup = this.fb.group({
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
    });

    if (!this.parentForm.contains(formGroupName)) {
      this.parentForm.addControl(formGroupName, childGroup);
    }
  }

  private setFormGroup(): void {
    if (!this.parentForm.contains('search')) {
      this.parentForm.addControl('search', this.fb.control(null));
    }
    if (!this.parentForm.contains('street')) {
      this.parentForm.addControl(
        'street',
        this.fb.control(null, [Validators.required])
      );
    }
    if (!this.parentForm.contains('number')) {
      this.parentForm.addControl(
        'number',
        this.fb.control(null, [Validators.required])
      );
    }
    if (!this.parentForm.contains('commune')) {
      this.parentForm.addControl(
        'commune',
        this.fb.control(null, [Validators.required])
      );
    }
    if (!this.parentForm.contains('region')) {
      this.parentForm.addControl('region', this.fb.control(null));
    }
    if (!this.parentForm.contains('locality')) {
      this.parentForm.addControl(
        'locality',
        this.fb.control(null, [Validators.required])
      );
    }
    if (!this.parentForm.contains('latitude')) {
      this.parentForm.addControl('latitude', this.fb.control(null));
    }
    if (!this.parentForm.contains('longitude')) {
      this.parentForm.addControl('longitude', this.fb.control(null));
    }
    if (!this.parentForm.contains('department')) {
      this.parentForm.addControl('department', this.fb.control(null));
    }
    if (!this.parentForm.contains('reference')) {
      this.parentForm.addControl('reference', this.fb.control(null));
    }
  }

  /**
   * Al arrastrar el marcador en el mapa, obtener la dirección de la ubicación y setear los campos del formulario.
   * @param event
   * @returns
   */
  onDragEnd(event: google.maps.MapMouseEvent): void {
    if (!event.latLng) {
      this.addressForm?.patchValue({ search: null });
      return;
    }
    this.getGeocode({ location: event.latLng }).subscribe((result) => {
      if (!result) {
        // Setear un error en el search field
        this.searchField?.setErrors({ addressInvalid: true });
        this.setInvalidAddress();
        return;
      }
      this.setAddress(result, true);
    });
  }

  /**
   * Método temporal para simular funcionamiento ecommerce antiguo.
   */
  private setLocality(localities: any[], commune: string) {
    console.log('addressForm (setLocality): ', this.parentForm.value);
    const formmatedCommune = removeSpecialCharacters(commune);
    if (!formmatedCommune) return;
    const itemLocality = localities.find(
      (item) => removeSpecialCharacters(item.location) === formmatedCommune
    );
    if (!itemLocality) return;
    this.addressForm?.controls['locality'].setValue(itemLocality.location);
  }

  setAddressManually(): void {
    if (
      !this.streetField?.value ||
      !this.numberField?.value ||
      !this.communeField?.value
    )
      return;
    console.log('setAddressManually');
    // Pasar al mapa
  }

  setCommuneManually(): void {
    if (!this.communeField?.value) return;
    const communeItem = this.communes().find(
      (commune) => commune.id === this.communeField?.value
    );
    if (!communeItem) return;
    this.setLocality(communeItem.localities, communeItem.city);
  }

  setInvalidAddress(): void {
    this.addressForm?.patchValue({
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

  /*******************************************************************************************************
   * NO AFECTA
   *******************************************************************************************************/

  async ngAfterViewInit(): Promise<void> {
    /*if (!isPlatformBrowser(this.platformId)) return;
    await this.initGooglePlacesService();*/
  }

  /*private async initGooglePlacesService(): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;
    this.advancedMarkerElement = AdvancedMarkerElement; // Guardamos la referencia a la clase
  }*/

  /**
   * Cambiar la dirección en el mapa a partir del placeId.
   * @param placeId
   */
  changeAddress(placeId: string): void {
    this.getGeocode({ placeId }).subscribe((result) => {
      if (!result) return;
      if (!result) {
        this.setInvalidAddress();
        return;
      }
      this.setAddress(result);
      this.mapComponent.setMarker(result.geometry.location.toJSON());
      //this.setMarker(result.geometry.location);
    });
  }

  /*onMapReady(): void {
    this.isMapLoaded.set(true);
  }*/

  /**
   * Setear marcador en el mapa y centrar el mapa en la ubicación del marcador.
   * @param location
   **/
  /*private setMarker(location: google.maps.LatLng): void {
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
  }*/

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

    this.addressForm?.patchValue(formValues);
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
}
