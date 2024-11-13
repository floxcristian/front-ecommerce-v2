// Angular
import { NgClass } from '@angular/common';
import {
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ControlsOf } from '@shared/models/controls.type';
// Models
import { ShippingType } from '../../models/shipping-type.type';
import { ShippingTypeOption } from './models/shipping-type-option.interface';
// PrimeNG
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [RadioButtonModule, SidebarModule, AccordionModule];

/**
 * Componente para seleccionar el tipo de envío.
 */
@Component({
  selector: 'app-shipping-type-form',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './shipping-type-form.component.html',
  styleUrl: './shipping-type-form.component.scss',
  host: { class: 'w-full' },
})
export class ShippingTypeFormComponent implements OnInit {
  shippingType = input.required<ShippingType>();
  onChange = output<ShippingType>();
  isVisibleSidebar = signal<boolean>(false);

  get shipmentTypeField() {
    return this.shippingTypeForm.get('shipmentType');
  }

  private readonly fb = inject(NonNullableFormBuilder);

  shippingTypeForm!: FormGroup<ControlsOf<{ shipmentType: ShippingType }>>;
  shippingTypes: ShippingTypeOption[] = [
    {
      title: 'Retiro en tienda',
      description: 'Selecciona la tienda y el día en que prefieres retirar',
      icon: 'fa-store',
      value: 'PICKUP',
    },
    {
      title: 'Despacho a domicilio',
      description: 'Selecciona la fecha de entrega',
      icon: 'fa-truck',
      value: 'DELIVERY',
    },
  ];

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.shippingTypeForm = this.fb.group({
      shipmentType: new FormControl<ShippingType>(this.shippingType(), {
        nonNullable: true,
      }),
    });
  }

  /**
   * Handle the shipment type selection.
   * @param value
   */
  onSelectShipmentType(value: ShippingType): void {
    this.shippingTypeForm.setValue({ shipmentType: value });
    this.onChange.emit(value);
  }
}
