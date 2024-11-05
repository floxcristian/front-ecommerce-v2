import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DocumentIdInputComponent } from '@shared/components/atomic/document-id-input/document-id-input.component';
import { PhoneInputComponent } from '@shared/components/atomic/phone-input/phone-input.component';
import { ShippingStepComponent } from './steps/shipping-step/shipping-step.component';
import { PaymentStepComponent } from './steps/payment-step/payment-step.component';

export const COMPONENTS = [ShippingStepComponent, PaymentStepComponent];

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    StyleClassModule,
    RippleModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule,
    InputTextModule,
    CommonModule,
    DividerModule,
    RadioButtonModule,
    DocumentIdInputComponent,
    PhoneInputComponent,
    ...COMPONENTS,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  products = [
    {
      name: 'Bateria 150 amp 900 cca borne estandar',
      price: 137990,
      image: 'https://images.implementos.cl/img/150/POWBAT0036-1.jpg',
    },
    {
      name: 'Bateria 150 amp 900 cca borne estandar',
      price: 137990,
      image: 'https://images.implementos.cl/img/150/POWBAT0036-1.jpg',
    },
    {
      name: 'Bateria 150 amp 900 cca borne estandar',
      price: 137990,
      image: 'https://images.implementos.cl/img/150/POWBAT0036-1.jpg',
    },
  ];
  retira!: string;
  tier2!: string;
  tier1!: string;
  quantities: number[] = [1, 1, 1];
  animal: number = 0;

  value1!: string;

  checked1: boolean = true;

  checked2: boolean = false;
  selectedValue: string = '';
  selectedValue2: string = '';

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  selectedCity!: string;
}
