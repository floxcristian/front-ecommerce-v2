// Angular
import { Component, forwardRef, inject } from '@angular/core';
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

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [InputTextModule];

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
})
export class PhoneInputComponent implements ControlValueAccessor, Validator {
  get phoneField(): FormControl<string> {
    return this.form.controls.phone;
  }

  private readonly fb = inject(FormBuilder);
  form!: FormGroup<ControlsOf<{ phone: string }>>;

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
    this.form = this.fb.nonNullable.group({
      phone: ['', Validators.required],
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
  validate(control: AbstractControl): ValidationErrors | null {
    return this.phoneField.errors;
  }

  writeValue(value: string): void {
    if (value) {
      this.phoneField.setValue(value);
    }
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
