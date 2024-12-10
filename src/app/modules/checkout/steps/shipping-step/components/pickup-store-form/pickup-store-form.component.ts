// Angular
import { Component, OnInit, signal, ViewChild } from '@angular/core';
// Components
import {
  IStore,
  StoreListSidebarComponent,
} from '../store-list-sidebar/store-list-sidebar.component';
import { stores } from './stores';
import { CommonModule } from '@angular/common';

const COMPONENTS = [StoreListSidebarComponent];

@Component({
  selector: 'app-pickup-store-form',
  standalone: true,
  imports: [COMPONENTS, CommonModule],
  templateUrl: './pickup-store-form.component.html',
  styleUrl: './pickup-store-form.component.scss',
})
export class PickupStoreFormComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: StoreListSidebarComponent;
  stores = signal<IStore[]>([]);
  selectedStore = signal<IStore | null>(null);

  ngOnInit(): void {
    this.stores.set(stores);
    if (this.stores().length) {
      this.selectedStore.set(this.stores()[0]);
    }
  }

  onSelectStore(selectedStore: IStore): void {
    console.log('selectedStore [PickupStoreFormComponent]: ', selectedStore);
    this.selectedStore.set(selectedStore);
  }
}
