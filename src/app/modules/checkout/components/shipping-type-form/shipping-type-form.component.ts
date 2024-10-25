// Angular
import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// PrimeNG
import { RadioButtonModule } from 'primeng/radiobutton';

const NG_MODULES = [ReactiveFormsModule, NgClass, NgForOf];
const PRIME_MODULES = [RadioButtonModule];

@Component({
  selector: 'app-shipping-type-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './shipping-type-form.component.html',
  styleUrl: './shipping-type-form.component.scss',
  host: {
    class: 'w-full',
  },
})
export class ShippingTypeFormComponent {
  get shipmentTypeField() {
    return this.shipmentForm.get('shipmentType');
  }

  shipmentForm!: FormGroup;

  shipmentTypes = [
    {
      title: 'Despacho a domicilio',
      description: 'Selecciona la fecha de entrega',
      icon: 'fa-truck',
      value: 'DELIVERY',
    },
    {
      title: 'Retiro en tienda',
      description: 'Selecciona la tienda y el día en que prefieres retirar',
      icon: 'fa-store',
      value: 'PICKUP',
    },
  ];

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.shipmentForm = this.fb.group({
      shipmentType: ['DELIVERY'],
    });
  }

  onSelectShipmentType(value: string): void {
    this.shipmentForm.patchValue({ shipmentType: value });
  }

  submit(value: any): void {
    console.log('Submit', value);
  }
}
