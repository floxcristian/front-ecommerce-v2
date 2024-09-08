// Angular
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
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
// Models
import { ControlsOf } from '@shared/models/controls.type';
// Validators
import { PhoneValidator } from './validators/phone.validator';
// Environment
import { environment } from '@env/environment';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [
  InputTextModule,
  InputGroupModule,
  InputGroupAddonModule,
];

@Component({
  selector: 'app-phone-input',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true,
    },
  ],
  host: { class: 'w-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneInputComponent implements ControlValueAccessor, Validator {
  get phoneField(): FormControl<string> {
    return this.form.controls.phone;
  }

  private readonly fb = inject(NonNullableFormBuilder);
  form!: FormGroup<ControlsOf<{ phone: string }>>;
  phoneCode = environment.phoneCode;

  private onChange!: (value: number) => void;
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
    this.form = this.fb.group({
      phone: ['', [Validators.required, PhoneValidator.isValidPhone]],
    });
  }

  onPhoneFieldInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const formattedValue = inputElement.value.replace(/[^0-9]/g, '');
    this.phoneField?.setValue(formattedValue);
    this.onChange(+formattedValue);
  }

  onPhoneFieldBlur(): void {
    this.onTouch();
  }

  /**
   * Validar el control síncronamente.
   * @param control The control to validate.
   * @returns The validation errors or null.
   * */
  validate(): ValidationErrors | null {
    return this.phoneField.errors;
  }

  writeValue(value: string): void {
    if (!value) return;
    this.phoneField.setValue(value);
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
