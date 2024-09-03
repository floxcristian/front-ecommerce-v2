// Angular
import {
  Component,
  Input,
  input,
  output,
  signal,
  ViewChild,
} from '@angular/core';
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
import {
  InputNumber,
  InputNumberInputEvent,
  InputNumberModule,
} from 'primeng/inputnumber';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
// Validators
import { PasswordValidator } from '../../validators/password.validator';
import { DocumentIdValidator } from '../../validators/document-id.validator';
// Environment
import { environment } from '@env/environment';
// Directives
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { ControlErrorContainerDirective } from '@shared/directives/validation-message/directives/control-error-container/control-error-container.directive';
import { CommonModule } from '@angular/common';

const NG_MODULES = [CommonModule, ReactiveFormsModule];
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
const DIRECTIVES = [
  FormSubmitDirective,
  ControlErrorsDirective,
  ControlErrorContainerDirective,
];

@Component({
  selector: 'app-personal-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES, ...DIRECTIVES],
  templateUrl: './personal-form.component.html',
  styleUrl: './personal-form.component.scss',
})
export class PersonalFormComponent {
  @ViewChild('phoneInput') public input!: InputNumber;
  accountType = input.required<string>();
  onGoBack = output<void>();
  onSubmit = output<any>();
  steps = input.required<number>();
  phoneCode = environment.phoneCode;
  isFormatting = signal<boolean>(false);

  personalForm!: FormGroup;

  get phoneField() {
    return this.personalForm.get('phone');
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

  ngAfterViewInit(): void {
    (this.input.input.nativeElement as HTMLElement).setAttribute('type', 'tel');
    console.log('this.input: ', this.input);
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

  onPhoneFieldInput(event: InputNumberInputEvent): void {
    //if (this.isFormatting()) return;
    //this.isFormatting.set(true);
    console.log('onPhoneFieldInput: ', event);
    const value = event.value;
    const stringValue = typeof value === 'number' ? value.toString() : value;
    this.formatField(stringValue);
    /*console.log('stringValue: ', stringValue);
    const formattedValue = (stringValue ?? '').replace(/[^0-9\s]/g, '');
    console.log('formattedValue: ', formattedValue);
    //console.log('formattedValue: ', formattedValue);
    this.phoneField?.setValue(formattedValue);*/
    // this.isFormatting.set(false);
  }

  onPhoneFieldKeyDown(event: KeyboardEvent): void {
    if (event.key !== 'Unidentified') return;

    console.log('onPhoneFieldKeyDown: ', event);
    console.log('[valor actual input]: ', this.phoneField?.value);
    console.log('this.input: ', this.input);
    this.formatField(this.phoneField?.value);
  }

  formatField(value: string | null): void {
    const formattedValue = (value ?? '').replace(/[^0-9\s]/g, '');
    console.log('[+] insertando nuevo valor: ', formattedValue);
    this.phoneField?.setValue(formattedValue);
  }
}
