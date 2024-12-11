// Angular
import {
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
// PrimeNG
import { DividerModule } from 'primeng/divider';
// Models
import { ShippingType } from './models/shipping-type.type';
import { RecipientType } from './models/recipient-type.type';
import { ShippingTypeAction } from './models/shipping-type-action.type';
// Components
import { ShippingTypeFormComponent } from './components/shipping-type-form/shipping-type-form.component';
import { RecipientTypeFormComponent } from './components/recipient-type-form/recipient-type-form.component';
import { RecipientAnotherFormComponent } from './components/recipient-another-form/recipient-another-form.component';
import { PickupStoreFormComponent } from './components/pickup-store-form/pickup-store-form.component';
import { DeliveryAddressFormComponent } from './components/delivery-address-form/delivery-address-form.component';
import { ShippingProductListComponent } from './components/shipping-product-list/shipping-product-list.component';
import { CheckoutService } from '../../services/checkout/checkout.service';

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
  //input.required<IStore[]>();
  //shippingType = input.required<ShippingType>()//signal<ShippingType>('PICKUP');
  shippingType!: ShippingType;
  recipientType = signal<RecipientType>('SELF');

  public readonly checkoutService = inject(CheckoutService);

  /*private getShippingType() {
    this.shippingType = this.checkoutService.shippingType();
    effect(() => {
      this.shippingType = this.checkoutService.shippingType();
    });
  }*/

  /**
   * Cambia el tipo de entrega.
   * @param type
   */
  /*onChangeShippingType(type: ShippingType): void {
    this.shippingType.set(type);
  }*/

  /**
   * Cambia el tipo de destinatario.
   * @param type
   */
  onRecipientTypeChange(type: RecipientType): void {
    this.recipientType.set(type);
  }
}
