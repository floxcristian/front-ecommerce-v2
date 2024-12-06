// Angular
import { NgClass } from '@angular/common';
import { Component, inject, output, signal } from '@angular/core';
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
import { DocumentType } from '@shared/models/document-type.type';
import { PaymentType } from './models/payment-type.type';

// Components
import { PurchaseOrderFormComponent } from './components/purchase-order-form/purchase-order-form.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { DocumentTypeFormComponent } from './components/document-type-form/document-type-form.component';

const NG_MODULES = [NgClass, ReactiveFormsModule];
const PRIME_MODULES = [RadioButtonModule];
const COMPONENTS = [
  PurchaseOrderFormComponent,
  InvoiceFormComponent,
  DocumentTypeFormComponent,
];

@Component({
  selector: 'app-payment-step',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS],
  templateUrl: './payment-step.component.html',
  styleUrl: './payment-step.component.scss',
  host: { class: 'w-full mb-6 lg:mb-0' },
})
export class PaymentStepComponent {
  onChange = output<PaymentType>();
  documentType = signal<DocumentType>('RECEIPT');

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
    {
      name: 'Línea de crédito',
      //image: 'assets/images/logos/logox.svg',
      value: 'CREDIT_LINE',
      description: 'Compra ahora y paga después',
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

  /**
   * Cambia el tipo de destinatario.
   * @param type
   */
  onDocumentTypeChange(type: DocumentType): void {
    this.documentType.set(type);
  }
}
