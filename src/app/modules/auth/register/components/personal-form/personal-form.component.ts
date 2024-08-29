// Angular
import { Component, input, output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputNumberModule } from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
// Validators
import { PasswordValidator } from '../../validators/password.validator';
import { DocumentIdValidator } from '../../validators/document-id.validator';
// Environment
import { environment } from '@env/environment';
// Directivas
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [
  PasswordModule,
  InputTextModule,
  DividerModule,
  ButtonModule,
  RippleModule,
  InputGroupModule,
  InputGroupAddonModule,
  KeyFilterModule,
  InputNumberModule,
];
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];

@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES, ...DIRECTIVES],
  templateUrl: './personal-form.component.html',
  styleUrl: './personal-form.component.scss',
})
export class PersonalFormComponent {
  accountType = input.required<string>();
  onGoBack = output<void>();
  onSubmit = output<any>();
  steps = input.required<number>();
  phoneCode = environment.phoneCode;

  personalForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.personalForm = this.fb.group(
      {
        position: [null],
        name: [
          null,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ],
        lastname: [null, Validators.required],
        documentId: [
          null,
          [Validators.required, DocumentIdValidator.isValidDocumentId],
        ],
        phone: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        confirmEmail: [null, [Validators.required]],
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            PasswordValidator.isValidPassword,
          ],
        ],
        confirmPassword: [null, [Validators.required]],
      },
      {
        validators: [PasswordValidator.matchPasswords],
      }
    );
  }

  submit(value: any): void {
    if (this.personalForm.valid) {
      this.personalForm.getRawValue();
      this.onSubmit.emit(value);
    } else {
      this.personalForm.markAllAsTouched();
    }
  }
}
