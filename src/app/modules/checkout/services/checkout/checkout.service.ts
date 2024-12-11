// Angular
import { computed, Injectable, signal } from '@angular/core';
// Models
import { ShippingType } from '../../steps/shipping-step/models/shipping-type.type';
import { ShippingTypeAction } from '../../steps/shipping-step/models/shipping-type-action.type';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private _shippingType = signal<ShippingType>('PICKUP');
  shippingType = this._shippingType.asReadonly();

  shippingAction = computed<ShippingTypeAction>(() =>
    this.shippingType() === 'DELIVERY' ? 'recibir' : 'retirar'
  );

  setShippingType(type: ShippingType): void {
    this._shippingType.set(type);
  }
}
