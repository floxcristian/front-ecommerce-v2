import { ShippingTypeOption } from '../models/shipping-type-option.interface';

export const shippingTypes: ShippingTypeOption[] = [
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
