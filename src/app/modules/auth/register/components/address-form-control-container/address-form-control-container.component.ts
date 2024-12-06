// Angular
import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  Inject,
  input,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
// Environment
import { environment } from '@env/environment';
// Components
import { AddressInputComponent } from '@shared/components/atomic/address-input/address-input.component';
import { GoogleMapsModule, MapGeocoder } from '@angular/google-maps';
import { filter, map } from 'rxjs';
import { GeolocationService } from '@core/api/geolocation/geolocation.service';
import { removeSpecialCharacters } from './utils';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';

const NG_MODULES = [ReactiveFormsModule, GoogleMapsModule];
const PRIME_MODULES = [
  InputTextModule,
  InputTextareaModule,
  SkeletonModule,
  DropdownModule,
];
const COMPONENTS = [AddressInputComponent];
const DIRECTIVES = [ControlErrorsDirective];

@Component({
  selector: 'app-address-form-control-container',
  standalone: true,
  imports: [NG_MODULES, COMPONENTS, PRIME_MODULES, DIRECTIVES],
  templateUrl: './address-form-control-container.component.html',
  styleUrl: './address-form-control-container.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => {
        try {
          return inject(ControlContainer, { skipSelf: true });
        } catch {
          return null;
        }
      },
    },
  ],
})
export class AddressFormControlContainerComponent
  implements OnInit, AfterViewInit
{
  controlKey = input.required<string>();

  center!: google.maps.LatLngLiteral;

  isMapLoaded = signal<boolean>(false);
  options = signal<google.maps.MapOptions>({
    zoom: 4,
    mapId: '473f291830f1a34c',
    center: environment.defaultMapCenter,
  });
  advancedMarkerElement!: typeof google.maps.marker.AdvancedMarkerElement;

  markerPositions = signal<google.maps.marker.AdvancedMarkerElement[]>([]);
  communes = signal<any[]>([]);
  isLoadingCommunes = signal<boolean>(true);
  addressForm!: FormGroup;
  /**
   * Formulario que puede ser el formulario padre o un nuevo formulario en el hijo.
   */
  formGroup!: FormGroup;

  get searchField() {
    return this.parentFormGroup.get(`${this.controlKey()}.search`);
  }

  get streetField() {
    return this.parentFormGroup.get(`${this.controlKey()}.street`);
  }

  get numberField() {
    return this.parentFormGroup.get(`${this.controlKey()}.number`);
  }

  get communeField() {
    return this.parentFormGroup.get(`${this.controlKey()}.commune`);
  }

  get parentFormGroup() {
    //return this.formGroup;

    //return this.controlContainer.control as FormGroup;
    console.log(
      '- controlContainer (parentFormGroup): ',
      this.controlContainer
    );
    if (this.controlContainer) {
      // Si es anidado, retorna el control del padre
      return this.controlContainer.control as FormGroup;
    }
    // Si es independiente, retorna el formGroup local
    return this.formGroup;
  }

  /*get addressForm() {
    return this.parentFormGroup.get(this.controlKey()) as FormGroup;
  }*/

  get formGroupInstance(): FormGroup {
    console.log(
      '- controlContainer (formGroupInstance): ',
      this.controlContainer
    );
    if (this.controlContainer) {
      console.log(
        '- parentFormGroup (formGroupInstance): ',
        this.parentFormGroup
      );
      return this.parentFormGroup.get(this.controlKey()) as FormGroup;
    }
    return this.parentFormGroup;
  }

  controlContainer = inject(ControlContainer);
  private readonly fb = inject(FormBuilder);

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private geocoder: MapGeocoder,
    private readonly geolocationService: GeolocationService
  ) {
    this.center = environment.defaultMapCenter;
  }

  ngOnInit(): void {
    this.fetchCommunes();

    this.formGroup =
      (this.controlContainer?.control as FormGroup) || this.fb.group({});

    // FIXME: es null
    console.log('this.formGroupInstance: ', this.formGroupInstance);
    this.addressForm = this.formGroupInstance;
    // Si es formulario independiente, crear el FormGroup completo
    if (!this.controlContainer) {
      console.log('1');
      this.formGroup.addControl('address', this.createAddressFormGroup());
    } else {
      console.log('2');
      console.log('parentFormGroup: ', this.parentFormGroup);
      // Si es anidado, agregar solo el control con el key proporcionado
      this.parentFormGroup.addControl(
        this.controlKey(),
        this.createAddressFormGroup()
      );
    }
    /*this.parentFormGroup.addControl(
      this.controlKey(),
      this.createAddressFormGroup()
    );*/
  }

  private createAddressFormGroup(): FormGroup {
    return this.fb.group({
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

  onMapReady(): void {
    this.isMapLoaded.set(true);
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
        this.searchField?.setErrors({ addressInvalid: true });
        this.setInvalidAddress();
        return;
      }
      this.setAddress(result, true);
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
    console.log('addressForm (setLocality): ', this.addressForm.value);
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
}
