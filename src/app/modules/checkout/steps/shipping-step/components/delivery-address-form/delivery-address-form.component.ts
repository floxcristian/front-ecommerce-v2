import { Component, OnInit, signal, ViewChild } from '@angular/core';
import {
  AddressListSidebarComponent,
  IAddress,
} from '../address-list-sidebar/address-list-sidebar.component';

const COMPONENTS = [AddressListSidebarComponent];

@Component({
  selector: 'app-delivery-address-form',
  standalone: true,
  imports: [COMPONENTS],
  templateUrl: './delivery-address-form.component.html',
  styleUrl: './delivery-address-form.component.scss',
})
export class DeliveryAddressFormComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: AddressListSidebarComponent;
  addresses = signal<IAddress[]>([]);
  selectedAddress = signal<IAddress | null>(null);

  ngOnInit(): void {
    this.addresses.set([
      { city: 'Arica', address: 'Av. Alejandro Azolas 2765', id: '1' },
      { city: 'Iquique', address: 'Av. Circunvalación 730', id: '2' },
      {
        city: 'Alto Hospicio',
        address: 'Santa Rosa del Molle 4019-A.',
        id: '3',
      },
    ]);
    if (this.addresses().length) {
      this.selectedAddress.set(this.addresses()[0]);
    }
  }

  onSelectAddress(selectedAddress: IAddress): void {
    this.selectedAddress.set(selectedAddress);
  }
}
