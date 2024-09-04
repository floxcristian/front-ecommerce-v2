// Angular
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
} from '@angular/core';
import {
  AbstractControl,
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
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
// Models
import { ControlsOf } from '@shared/models/controls.type';
import { EmailValidator } from './validators/email.validator';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [InputTextModule];
@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './email-input.component.html',
  styleUrl: './email-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true,
    },
  ],
  host: { class: 'w-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailInputComponent implements ControlValueAccessor, Validator {
  get emailField(): FormControl<string> {
    return this.form.controls.email;
  }

  private readonly fb = inject(FormBuilder);
  form!: FormGroup<ControlsOf<{ email: string }>>;

  private onChange!: (value: string) => void;
  private onTouch!: () => void;

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
      email: ['', [Validators.required, EmailValidator.isValidEmail]],
    });
  }

  onEmailFieldInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    /*const formattedValue = inputElement.value.replace(/[^0-9]/g, '');
    this.emailField?.setValue(formattedValue);*/
    this.onChange(inputElement.value);
  }

  onEmailFieldBlur(): void {
    this.onTouch();
  }

  /**
   * Validar el control síncronamente.
   * @returns The validation errors or null.
   * */
  validate(): ValidationErrors | null {
    return this.emailField.errors;
  }

  writeValue(value: string): void {
    if (!value) return;
    this.emailField.setValue(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
