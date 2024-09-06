import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { ControlsOf } from '@shared/models/controls.type';
import { PasswordModule } from 'primeng/password';
import { PasswordValidator } from './validators/password.validator';
import { DividerModule } from 'primeng/divider';
import { CommonModule } from '@angular/common';

const NG_MODULES = [ReactiveFormsModule, CommonModule];
const PRIME_MODULES = [PasswordModule, DividerModule];

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
  host: { class: 'w-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PasswordInputComponent implements ControlValueAccessor, Validator {
  get passwordField(): FormControl<string> {
    return this.form.controls.password;
  }

  private readonly fb = inject(FormBuilder);
  form!: FormGroup<ControlsOf<{ password: string }>>;

  private onChange!: (value: string) => void;
  private onTouch!: () => void;

  errors: Record<string, boolean> = {
    passwordLowercase: true,
    passwordUppercase: true,
    passwordNumber: true,
    passwordMinLength: true,
  };

  constructor() {
    this.buildForm();
  }

  /**
   * Build the form group.
   * @private
   * @returns void
   **/
  private buildForm(): void {
    this.form = this.fb.nonNullable.group({
      password: ['', [Validators.required, PasswordValidator.isValidPassword]],
    });
  }

  onPasswordFieldInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    this.checkErrors(value);
    this.onChange(value);
  }

  private checkErrors(password: string): void {
    this.errors = {
      passwordLowercase: !/[a-z]/.test(password),
      passwordUppercase: !/[A-Z]/.test(password),
      passwordNumber: !/[0-9]/.test(password),
      passwordMinLength: password.length < 8,
    };
  }

  onPasswordFieldBlur(): void {
    this.onTouch();
  }

  /**
   * Validar el control síncronamente.
   * @param control The control to validate.
   * @returns The validation errors or null.
   * */
  validate(): ValidationErrors | null {
    return this.passwordField.errors;
  }

  writeValue(value: string): void {
    if (!value) return;
    this.passwordField.setValue(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
