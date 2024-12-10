// Angular
import { CommonModule, NgClass } from '@angular/common';
import {
  AfterViewInit,
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// Models
import { ControlsOf } from '@shared/models/controls.type';
// Utils
import { validateNoNulls } from '@shared/services/form-utils';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { DropdownModule } from 'primeng/dropdown';
import { MapComponent } from '@shared/components/blocks/map/map.component';

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [
  SidebarModule,
  ButtonModule,
  RadioButtonModule,
  DropdownModule,
];

const COMPONENTS = [MapComponent];

export interface IStore {
  name: string;
  code: string;
  address: string;
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-store-list-sidebar',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS, CommonModule],
  templateUrl: './store-list-sidebar.component.html',
  styleUrl: './store-list-sidebar.component.scss',
})
export class StoreListSidebarComponent implements OnInit, AfterViewInit {
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  stores = input.required<IStore[]>();
  selectedStoreCode = input<string | null>();
  onSubmit = output<IStore>();
  pendingMarkerUpdate = signal<boolean>(false);
  isMapReady = signal<boolean>(false);

  storeForm!: FormGroup;
  visible = signal<boolean>(false);

  get codeField() {
    return this.storeForm.get('code');
  }

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
    console.log('ngOnInit...');
    /*const selectedStore = this.stores().find(
      (store) => store.code === this.selectedStoreCode()
    );
    console.log('selectedStore', selectedStore);
    if (selectedStore) {
      this.storeForm.patchValue({
        name: selectedStore.name,
        address: selectedStore.address,
      });
      this.pendingMarkerUpdate.set(true);
    }*/
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit...');
    /*this.mapComponent.setMarker({
      lat: selectedStore.lat,
      lng: selectedStore.lng,
    });*/
  }

  onMapReady(): void {
    this.isMapReady.set(true);
    if (this.pendingMarkerUpdate()) {
      this.onShow();
    }
  }

  private buildForm(): void {
    this.storeForm = this.fb.group({
      name: '',
      address: '',
      code: '',
    });
  }

  show(): void {
    this.visible.set(true);
  }

  onShow(): void {
    console.log('onShow selectedStoreCode: ', this.selectedStoreCode());
    const selectedStore = this.stores().find(
      (store) => store.code === this.selectedStoreCode()
    );
    console.log('selectedStore onShow', selectedStore);
    if (selectedStore) {
      this.storeForm.setValue({
        code: selectedStore.code,
        name: selectedStore.name,
        address: selectedStore.address,
      });
      this.setMarker({
        lat: selectedStore.lat,
        lng: selectedStore.lng,
      });
    }
  }

  onSelectItem(event: any): void {
    const { value: code } = event;
    const selectedStore = this.stores().find((store) => store.code === code);
    if (selectedStore) {
      this.storeForm.patchValue({
        code: selectedStore.code,
        name: selectedStore.name,
        address: selectedStore.address,
      });
      this.setMarker({ lat: selectedStore.lat, lng: selectedStore.lng });
    }
  }

  setMarker(coords: google.maps.LatLngLiteral): void {
    if (this.isMapReady()) {
      console.log('setMarker en [StoreListSidebarComponent]');
      this.mapComponent.setMarker(coords);
    } else {
      console.log('pendingMarkerUpdate en [StoreListSidebarComponent]');
      this.pendingMarkerUpdate.set(true);
    }
  }

  submit(): void {
    this.visible.set(false);
    const formData = this.storeForm.getRawValue() as IStore;
    if (validateNoNulls(formData)) {
      this.onSubmit.emit(formData);
    }
  }
}
