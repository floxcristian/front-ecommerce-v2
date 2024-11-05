import { PaymentType } from './payment-type.type';

export interface PaymentTypeOption {
  name: string;
  image?: string;
  value: PaymentType;
  description?: string;
}
