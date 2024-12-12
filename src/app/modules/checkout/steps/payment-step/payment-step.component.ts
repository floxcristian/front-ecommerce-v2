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
import { AuthService } from '@core/services/auth/auth.service';
import { paymentTypes } from './constants/payment-types';

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
  payments: PaymentTypeOption[] = [];

  get paymentTypeField() {
    return this.paymentTypeForm.get('paymentType');
  }

  private readonly authService = inject(AuthService);
  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.setPaymentTypes();
    this.buildForm();
  }

  setPaymentTypes() {
    this.payments = this.authService.isLoggedIn()
      ? paymentTypes
      : paymentTypes.filter((payment) => !payment.requiresLogin);
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
