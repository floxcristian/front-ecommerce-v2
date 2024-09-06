// Angular
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
// Validators
import { PasswordValidator } from '../../validators/password.validator';
import { EmailValidator } from '@shared/components/atomic/email-input/validators/email.validator';
// Directives
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
// Components
import { PhoneInputComponent } from '@shared/components/atomic/phone-input/phone-input.component';
import { DocumentIdInputComponent } from '@shared/components/atomic/document-id-input/document-id-input.component';
import { EmailInputComponent } from '@shared/components/atomic/email-input/email-input.component';
import { PositionInputComponent } from '@shared/components/atomic/position-input/position-input.component';

const NG_MODULES = [ReactiveFormsModule, CommonModule];
const PRIME_MODULES = [
  PasswordModule,
  InputTextModule,
  DividerModule,
  ButtonModule,
  RippleModule,
  InputGroupModule,
  InputGroupAddonModule,
  KeyFilterModule,
];
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];
const COMPONENTS = [
  PhoneInputComponent,
  DocumentIdInputComponent,
  EmailInputComponent,
  PositionInputComponent,
];

@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES, ...DIRECTIVES, ...COMPONENTS],
  templateUrl: './personal-form.component.html',
  styleUrl: './personal-form.component.scss',
})
export class PersonalFormComponent {
  accountType = input.required<string>();
  onGoBack = output<void>();
  onSubmit = output<any>();
  steps = input.required<number>();

  personalForm!: FormGroup;

  get phoneField() {
    return this.personalForm.get('phone');
  }

  get emailField() {
    return this.personalForm.get('email');
  }

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
        documentId: [null, Validators.required],
        phone: [null],
        email: [null, [Validators.required]],
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
        validators: [
          PasswordValidator.matchPasswords,
          EmailValidator.matchEmails,
        ],
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

  onTextFieldInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const formattedValue = this.getValidCharacters(inputElement.value);
    const formControlName = inputElement.getAttribute(
      'formControlName'
    ) as string;
    this.personalForm.get(formControlName)?.setValue(formattedValue);
  }

  onTextFieldBlur(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const formControlName = inputElement.getAttribute(
      'formControlName'
    ) as string;
    const formattedValue = inputElement.value.trim();
    this.personalForm.get(formControlName)?.setValue(formattedValue);
  }

  getValidCharacters(value: string): string {
    if (!value) return '';
    return value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '').replace(/\s+/g, ' ');
  }
}
