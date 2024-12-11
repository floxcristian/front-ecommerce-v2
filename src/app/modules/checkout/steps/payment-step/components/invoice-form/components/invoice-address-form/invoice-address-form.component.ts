// Angular
import { Component, inject, input, output } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgClass } from '@angular/common';
// PrimeNG
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
// Models
import { UseDeliveryAddressOption } from './models/use-delivery-address-options.interface';
import { ControlsOf } from '@shared/models/controls.type';
// Components
import { AddressFormControlContainerV2Component } from 'src/app/modules/auth/register/components/address-form-control-container-v2/address-form-control-container-v2.component';
// Services
import { CheckoutService } from 'src/app/modules/checkout/services/checkout/checkout.service';

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [RadioButtonModule, InputTextModule];
const COMPONENTS = [AddressFormControlContainerV2Component];

@Component({
  selector: 'app-invoice-address-form',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS],
  templateUrl: './invoice-address-form.component.html',
  styleUrl: './invoice-address-form.component.scss',
})
export class InvoiceAddressFormComponent {
  useDeliveryAddress = input.required<boolean>();
  onChange = output<boolean>();

  useDeliveryAddressOptions: UseDeliveryAddressOption[] = [
    { title: 'La misma dirección de envío', value: true },
    { title: 'Usar dirección de facturación distinta', value: false },
  ];

  invoiceAddressForm!: FormGroup;

  useDeliveryAddressForm!: FormGroup<
    ControlsOf<{ useDeliveryAddress: boolean }>
  >;

  get useDeliveryAddressField() {
    return this.useDeliveryAddressForm.get('useDeliveryAddress');
  }

  public readonly checkoutService = inject(CheckoutService);
  private readonly fb = inject(NonNullableFormBuilder);

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.useDeliveryAddressForm = this.fb.group({
      useDeliveryAddress: this.useDeliveryAddress(),
    });
    if (this.checkoutService.shippingType() === 'PICKUP') {
      this.useDeliveryAddressForm.setValue({ useDeliveryAddress: false });
      this.onChange.emit(false);
      // this.useDeliveryAddress.se
    }
    this.invoiceAddressForm = this.fb.group({});
  }

  /**
   * Handle the recipient type selection.
   * @param value
   */
  onSelectOption(value: boolean): void {
    this.useDeliveryAddressForm.setValue({ useDeliveryAddress: value });
    this.onChange.emit(value);
  }
}
