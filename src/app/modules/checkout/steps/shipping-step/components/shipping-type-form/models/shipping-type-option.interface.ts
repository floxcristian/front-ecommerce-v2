import { ShippingType } from '../../../models/shipping-type.type';

export interface ShippingTypeOption {
  title: string;
  description: string;
  icon: string;
  value: ShippingType;
}
