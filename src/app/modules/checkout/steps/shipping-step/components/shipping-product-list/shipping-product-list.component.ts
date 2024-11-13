// Angular
import { CurrencyPipe, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';

const NG_MODULES = [NgClass, CurrencyPipe];
const PRIME_MODULES = [ButtonModule, TooltipModule, SidebarModule];

@Component({
  selector: 'app-shipping-product-list',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './shipping-product-list.component.html',
  styleUrl: './shipping-product-list.component.scss',
})
export class ShippingProductListComponent {
  isVisibleSidebar = signal<boolean>(false);
  products = [
    {
      price: 120000,
      items: [
        {
          brand: 'POWERTRUCK',
          name: 'Bateria 100 amp 700 cca borne con perno',
          sku: 'POWBAT0030',
          quantity: 3,
          image: 'https://images.implementos.cl/img/150/POWBAT0030-1.jpg',
        },
        {
          brand: 'SUNTECH',
          name: 'Llanta disco 8.25x22.5 pulg europea aluminio',
          sku: 'BETLLA0001',
          quantity: 1,
          image: 'https://images.implementos.cl/img/150/BETLLA0001-1.jpg',
        },
        {
          brand: 'INDIANA',
          name: 'Aceite hidraulico indiana iso 68 19 lts',
          sku: 'LUBIND0003',
          quantity: 2,
          image: 'https://images.implementos.cl/img/150/LUBIND0003-1.jpg',
        },
      ],
    },
    {
      price: 48000,
      items: [
        {
          brand: 'SUNTECH',
          name: 'Llanta disco 8.25x22.5 pulg europea aluminio',
          sku: 'BETLLA0001',
          quantity: 1,
          image: 'https://images.implementos.cl/img/150/BETLLA0001-1.jpg',
        },
        {
          brand: 'INDIANA',
          name: 'Aceite hidraulico indiana iso 68 19 lts',
          sku: 'LUBIND0003',
          quantity: 2,
          image: 'https://images.implementos.cl/img/150/LUBIND0003-1.jpg',
        },
      ],
    },
  ];
}
