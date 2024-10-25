// Angular
import { NgClass, NgForOf } from '@angular/common';
import { Component, inject, OnInit, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ControlsOf } from '@shared/models/controls.type';
// PrimeNG
import { RadioButtonModule } from 'primeng/radiobutton';

const NG_MODULES = [ReactiveFormsModule, NgClass, NgForOf];
const PRIME_MODULES = [RadioButtonModule];

export type ShippingType = 'DELIVERY' | 'PICKUP';
export interface ShipmentType {
  title: string;
  description: string;
  icon: string;
  value: ShippingType;
}

/**
 * Componente para seleccionar el tipo de envío.
 */
@Component({
  selector: 'app-shipping-type-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './shipping-type-form.component.html',
  styleUrl: './shipping-type-form.component.scss',
  host: { class: 'w-full' },
})
export class ShippingTypeFormComponent implements OnInit {
  onChange = output<ShippingType>();
  private readonly fb = inject(FormBuilder);

  get shipmentTypeField() {
    return this.shipmentForm.get('shipmentType');
  }

  shipmentForm!: FormGroup<ControlsOf<{ shipmentType: ShippingType }>>;
  shipmentTypes: ShipmentType[] = [
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

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.shipmentForm = this.fb.nonNullable.group({
      shipmentType: new FormControl<ShippingType>('DELIVERY', {
        nonNullable: true,
      }),
    });
  }

  /**
   * Handle the shipment type selection.
   * @param value
   */
  onSelectShipmentType(value: ShippingType): void {
    this.shipmentForm.patchValue({ shipmentType: value });
    this.onChange.emit(value);
  }
}
