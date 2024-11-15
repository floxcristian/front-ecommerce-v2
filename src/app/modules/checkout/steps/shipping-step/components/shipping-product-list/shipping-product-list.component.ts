// Angular
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
// Pipes
import { ShippingDatePipe } from '@shared/pipes/shipping-date/shipping-date.pipe';
// Components
import { GroupDateSidebarComponent } from '../group-date-sidebar/group-date-sidebar.component';
import {
  AvailableDate,
  GroupDateSidebar2Component,
} from '../group-date-sidebar-2/group-date-sidebar-2.component';

const NG_MODULES = [NgClass, CurrencyPipe, CommonModule, FormsModule];
const PRIME_MODULES = [
  ButtonModule,
  TooltipModule,
  SidebarModule,
  CalendarModule,
  RadioButtonModule,
];
const COMPONENTS = [GroupDateSidebarComponent, GroupDateSidebar2Component];
const PIPES = [ShippingDatePipe];

@Component({
  selector: 'app-shipping-product-list',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS, PIPES],
  templateUrl: './shipping-product-list.component.html',
  styleUrl: './shipping-product-list.component.scss',
})
export class ShippingProductListComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: GroupDateSidebar2Component;

  isVisibleSidebarInfo = signal<boolean>(false);
  isVisibleSidebarDate = signal<boolean>(false);
  disabledDates: Date[] = [];
  availableDates: AvailableDate[] = [
    {
      id: '1',
      date: new Date(), // 20 de marzo 2024
      price: 1000,
    },
    {
      id: '2',
      date: new Date(2024, 11, 21), // 21 de marzo 2024
      price: 1000,
    },
    {
      id: '3',
      date: new Date(2024, 11, 22), // 22 de marzo 2024
      price: 0,
    },
  ];
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
  selectedDate = signal<AvailableDate | null>(null);

  ngOnInit(): void {
    this.selectedDate.set(this.availableDates[0]);
  }

  onSelectDate(selectedDate: AvailableDate): void {
    console.log('onSelectDate: ', selectedDate);
    this.selectedDate.set(selectedDate);
  }

  showSidebar(): void {
    this.sidebar.show();
  }
}
