import { PaymentTypeOption } from '../models/payment-type-option.interface';

export const paymentTypes: PaymentTypeOption[] = [
  {
    name: 'Webpay Plus',
    image: 'https://www.implementos.cl/assets/images/web-pay.svg',
    value: 'WEBPAY',
    description: 'Tarjeta de débito, crédito o prepago',
    requiresLogin: false,
  },
  // sin CVV (Código de seguridad de 3 dígitos)
  {
    name: 'Mercado Pago',
    image: 'https://www.implementos.cl/assets/images/mercado-pago.svg',
    value: 'MERCADO_PAGO',
    description: 'Tarjeta de débito, crédito, prepago o dinero en Mercadopago',
    requiresLogin: false,
  },
  {
    name: 'Khipu',
    image:
      'https://s3.amazonaws.com/static.khipu.com/buttons/2024/200x75-color.svg',
    value: 'KHIPU',
    description: 'Transferencia bancaria',
    requiresLogin: false,
  },
  {
    name: 'Línea de crédito',
    //image: 'assets/images/logos/logox.svg',
    value: 'CREDIT_LINE',
    description: 'Compra ahora y paga después',
    requiresLogin: true,
  },
];
