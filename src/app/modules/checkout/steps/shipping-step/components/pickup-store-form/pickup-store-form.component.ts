// Angular
import { Component, OnInit, signal, ViewChild } from '@angular/core';
// Components
import {
  IStore,
  StoreListSidebarComponent,
} from '../store-list-sidebar/store-list-sidebar.component';

const COMPONENTS = [StoreListSidebarComponent];

@Component({
  selector: 'app-pickup-store-form',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './pickup-store-form.component.html',
  styleUrl: './pickup-store-form.component.scss',
})
export class PickupStoreFormComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: StoreListSidebarComponent;
  stores = signal<IStore[]>([]);
  selectedStore = signal<IStore | null>(null);

  ngOnInit(): void {
    this.stores.set([
      { name: 'Arica', address: 'Av. Alejandro Azolas 2765', code: '1' },
      { name: 'Iquique', address: 'Av. Circunvalación 730', code: '2' },
      {
        name: 'Alto Hospicio',
        address: 'Santa Rosa del Molle 4019-A.',
        code: '3',
      },
    ]);
    if (this.stores().length) {
      this.selectedStore.set(this.stores()[0]);
    }
  }

  onSelectStore(selectedStore: IStore): void {
    this.selectedStore.set(selectedStore);
  }
}
