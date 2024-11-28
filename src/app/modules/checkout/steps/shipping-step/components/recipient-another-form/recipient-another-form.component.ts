// Angular
import { Component, inject, input } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// Models
import { ControlsOf } from '@shared/models/controls.type';
import { RecipientAnother } from './models/recipient-another.interface';
import { ShippingTypeAction } from '../../models/shipping-type-action.type';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
// Components
import { DocumentIdInputComponent } from '@shared/components/atomic/document-id-input/document-id-input.component';
import { PhoneInputComponent } from '@shared/components/atomic/phone-input/phone-input.component';
// Directives
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [InputTextModule];
const COMPONENTS = [DocumentIdInputComponent, PhoneInputComponent];
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];

/**
 * Componente para ingresar los datos de la persona que recibe o retira el pedido.
 */
@Component({
  selector: 'app-recipient-another-form',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS, DIRECTIVES],
  templateUrl: './recipient-another-form.component.html',
  styleUrl: './recipient-another-form.component.scss',
  host: { class: 'w-full' },
})
export class RecipientAnotherFormComponent {
  shippingAction = input.required<ShippingTypeAction>();
  recipientAnotherForm!: FormGroup<ControlsOf<RecipientAnother>>;

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.recipientAnotherForm = this.fb.group({
      name: '',
      lastName: '',
      documentId: '',
      phone: '',
    });
  }
}
