// Angular
import { Component, inject, signal } from '@angular/core';
// PrimeNG
import { DividerModule } from 'primeng/divider';
// Models
import { RecipientType } from './models/recipient-type.type';
// Services
import { CheckoutService } from '../../services/checkout/checkout.service';
// Components
import { ShippingTypeFormComponent } from './components/shipping-type-form/shipping-type-form.component';
import { RecipientTypeFormComponent } from './components/recipient-type-form/recipient-type-form.component';
import { RecipientAnotherFormComponent } from './components/recipient-another-form/recipient-another-form.component';
import { PickupStoreFormComponent } from './components/pickup-store-form/pickup-store-form.component';
import { DeliveryAddressFormComponent } from './components/delivery-address-form/delivery-address-form.component';
import { ShippingProductListComponent } from './components/shipping-product-list/shipping-product-list.component';

const PRIME_MODULES = [DividerModule];
const COMPONENTS = [
  ShippingTypeFormComponent,
  RecipientTypeFormComponent,
  RecipientAnotherFormComponent,
  PickupStoreFormComponent,
  DeliveryAddressFormComponent,
  ShippingProductListComponent,
];

@Component({
  selector: 'app-shipping-step',
  standalone: true,
  imports: [PRIME_MODULES, COMPONENTS],
  templateUrl: './shipping-step.component.html',
  styleUrl: './shipping-step.component.scss',
  host: { class: 'w-full mb-6 lg:mb-0' },
})
export class ShippingStepComponent {
  recipientType = signal<RecipientType>('SELF');

  public readonly checkoutService = inject(CheckoutService);

  /**
   * Cambia el tipo de destinatario.
   * @param type
   */
  onRecipientTypeChange(type: RecipientType): void {
    this.recipientType.set(type);
  }
}
