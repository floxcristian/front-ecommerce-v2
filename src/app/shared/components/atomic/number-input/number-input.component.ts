// Angular
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
} from '@angular/core';
import {
  ControlValueAccessor,
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
// Models
import { ControlsOf } from '@shared/models/controls.type';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [InputTextModule];

@Component({
  selector: 'app-number-input',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NumberInputComponent),
      multi: true,
    },
  ],
  host: { class: 'w-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInputComponent implements ControlValueAccessor, Validator {
  get valueField(): FormControl<string> {
    return this.form.controls.value;
  }

  private readonly fb = inject(NonNullableFormBuilder);
  form!: FormGroup<ControlsOf<{ value: string }>>;

  private onChange: (value: number) => void = () => {};
  private onTouch: () => void = () => {};

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
      value: ['', [Validators.required]],
    });
  }

  onValueFieldInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const formattedValue = inputElement.value.replace(/[^0-9]/g, '');
    this.valueField?.setValue(formattedValue);
    this.onChange(+formattedValue);
  }

  onValueFieldBlur(): void {
    this.onTouch();
  }

  /**
   * Validar el control síncronamente.
   * @param control The control to validate.
   * @returns The validation errors or null.
   * */
  validate(): ValidationErrors | null {
    return this.valueField.errors;
  }

  writeValue(value: string): void {
    if (!value) return;
    this.valueField.setValue(value);
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }
}
