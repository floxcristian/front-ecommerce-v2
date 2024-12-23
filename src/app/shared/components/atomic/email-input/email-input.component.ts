// Angular
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  input,
  OnInit,
  output,
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
} from '@angular/forms';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
  AutoCompleteSelectEvent,
} from 'primeng/autocomplete';
// Models
import { ControlsOf } from '@shared/models/controls.type';
// Validators
import { EmailValidator } from './validators/email.validator';
// Constants
import { EMAIL_DOMAINS } from './constants/domains';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [
  InputTextModule,
  AutoCompleteModule,
  IconFieldModule,
  InputIconModule,
];

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
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
export class EmailInputComponent
  implements OnInit, ControlValueAccessor, Validator
{
  isRequired = input<boolean>(true);
  useExistsValidator = input<boolean>(false);
  alreadyExistsError = output<void>();

  get emailField(): FormControl<string> {
    return this.form.controls.email;
  }

  private readonly fb = inject(FormBuilder);

  private onChange: (value: string) => void = () => {};
  private onTouch: () => void = () => {};

  filteredDomains = signal<string[]>([]);
  currentInputValue = signal<string>('');
  canExecuteAsyncValidate = signal<boolean>(false);
  isLoading = signal<boolean>(false);
  form!: FormGroup<ControlsOf<{ email: string }>>;

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * Build the form group.
   * @private
   * @returns void
   **/
  private buildForm(): void {
    this.form = this.fb.nonNullable.group({
      email: ['', [EmailValidator.isValidEmail(this.isRequired())]],
    });
  }

  onEmailFieldInput(event: Event): void {
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
    if (!query.includes('@')) {
      this.filteredDomains.set([]);
    } else if (query.endsWith('@')) {
      this.filteredDomains.set(EMAIL_DOMAINS);
    } else {
      const [_, domain] = query.split('@');
      this.filteredDomains.set(
        EMAIL_DOMAINS.filter((item) => item.startsWith(domain))
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
