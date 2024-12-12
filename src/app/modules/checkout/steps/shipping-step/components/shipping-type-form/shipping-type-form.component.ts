// Angular
import { NgClass } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// Models
import { ControlsOf } from '@shared/models/controls.type';
import { ShippingType } from '../../models/shipping-type.type';
import { ShippingTypeOption } from './models/shipping-type-option.interface';
// PrimeNG
import { RadioButtonModule } from 'primeng/radiobutton';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { CheckoutService } from 'src/app/modules/checkout/services/checkout/checkout.service';
// Constants
import { shippingTypes } from './contants/shipping-types';

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
  isVisibleSidebar = signal<boolean>(false);

  get shipmentTypeField() {
    return this.shippingTypeForm.get('shipmentType');
  }

  public readonly checkoutService = inject(CheckoutService);
  private readonly fb = inject(NonNullableFormBuilder);

  shippingTypeForm!: FormGroup<ControlsOf<{ shipmentType: ShippingType }>>;
  shippingTypes: ShippingTypeOption[] = shippingTypes;

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.shippingTypeForm = this.fb.group({
      shipmentType: new FormControl<ShippingType>(
        this.checkoutService.shippingType(),
        {
          nonNullable: true,
        }
      ),
    });
  }

  /**
   * Handle the shipment type selection.
   * @param value
   */
  onSelectShipmentType(value: ShippingType): void {
    this.shippingTypeForm.setValue({ shipmentType: value });
    this.checkoutService.setShippingType(value);
    // this.onChange.emit(value);
  }
}
