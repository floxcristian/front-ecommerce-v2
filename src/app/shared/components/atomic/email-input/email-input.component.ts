// Angular
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  signal,
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
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
  AutoCompleteSelectEvent,
} from 'primeng/autocomplete';
// Models
import { ControlsOf } from '@shared/models/controls.type';
// Validators
import { EmailValidator } from './validators/email.validator';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [InputTextModule, AutoCompleteModule];

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

  domains = ['gmail.com', 'hotmail.com', 'icloud.com', 'live.com', 'yahoo.com'];
  filteredDomains = signal<string[]>([]);
  currentInputValue = signal<string>('');

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
    console.log('input');
    const inputElement = event.target as HTMLInputElement;
    const formattedValue = inputElement.value.replace(/\s/g, '').toLowerCase();
    this.emailField?.setValue(formattedValue);
    this.onChange(formattedValue);
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

  search({ query }: AutoCompleteCompleteEvent): void {
    this.currentInputValue.set(this.emailField.value);
    console.log('query: ', query);
    if (!query.includes('@')) {
      console.log('1');
      this.filteredDomains.set([]);
    } else if (query.endsWith('@')) {
      console.log('2');
      this.filteredDomains.set(this.domains);
    } else {
      console.log('3');
      const [_, domain] = query.split('@');
      this.filteredDomains.set(
        this.domains.filter((d) => d.startsWith(domain))
      );
    }
  }

  onSuggestionSelect(event: AutoCompleteSelectEvent): void {
    const emailParts = this.currentInputValue().split('@');
    const emailPrefix = emailParts[0];
    const emailValue = `${emailPrefix}@${event.value}`;
    this.emailField.setValue(emailValue);
    this.onChange(emailValue);
  }
}
