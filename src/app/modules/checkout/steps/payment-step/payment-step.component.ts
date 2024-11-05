// Angular
import { NgClass } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// PrimeNG
import { RadioButtonModule } from 'primeng/radiobutton';
// Models
import { PaymentTypeOption } from './models/payment-type-option.interface';
import { ControlsOf } from '@shared/models/controls.type';
import { PaymentType } from './models/payment-type.type';

const NG_MODULES = [NgClass, ReactiveFormsModule];
const PRIME_MODULES = [RadioButtonModule];

@Component({
  selector: 'app-payment-step',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './payment-step.component.html',
  styleUrl: './payment-step.component.scss',
  host: { class: 'w-full' },
})
export class PaymentStepComponent {
  onChange = output<PaymentType>();

  paymentTypeForm!: FormGroup<ControlsOf<{ paymentType: PaymentType }>>;
  payments: PaymentTypeOption[] = [
    {
      name: 'Webpay Plus',
      image: 'https://www.implementos.cl/assets/images/web-pay.svg',
      value: 'WEBPAY',
      description: 'Tarjeta de débito, crédito o prepago',
    },
    // sin CVV (Código de seguridad de 3 dígitos)
    {
      name: 'Mercado Pago',
      image: 'https://www.implementos.cl/assets/images/mercado-pago.svg',
      value: 'MERCADO_PAGO',
      description:
        'Tarjeta de débito, crédito, prepago o dinero en Mercadopago',
    },
    {
      name: 'Khipu',
      image:
        'https://s3.amazonaws.com/static.khipu.com/buttons/2024/200x75-color.svg',
      value: 'KHIPU',
      description: 'Transferencia bancaria',
    },
  ];

  get paymentTypeField() {
    return this.paymentTypeForm.get('paymentType');
  }

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.paymentTypeForm = this.fb.group({
      paymentType: new FormControl<PaymentType>('' as PaymentType, {
        nonNullable: true,
      }),
    });
  }

  /**
   * Handle the shipment type selection.
   * @param value
   */
  onSelectPaymentType(value: PaymentType): void {
    this.paymentTypeForm.setValue({ paymentType: value });
    this.onChange.emit(value);
  }
}
