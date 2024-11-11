import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  inject,
  OnInit,
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
import { ContactService } from '@core/api/contact/contact.service';
import { ControlsOf } from '@shared/models/controls.type';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';

const NG_MODULES = [ReactiveFormsModule, CommonModule];
const PRIME_MODULES = [DropdownModule];

@Component({
  selector: 'app-position-input',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './position-input.component.html',
  styleUrl: './position-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PositionInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PositionInputComponent),
      multi: true,
    },
  ],
  host: { class: 'w-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionInputComponent
  implements OnInit, ControlValueAccessor, Validator
{
  get positionField(): FormControl<string> {
    return this.form.controls.position;
  }

  private readonly fb = inject(FormBuilder);
  private readonly contactService = inject(ContactService);
  form!: FormGroup<ControlsOf<{ position: string }>>;

  private onChange: (value: string) => void = () => {};
  private onTouch: () => void = () => {};

  isLoading = signal(true);
  positions = signal<any[]>([]);

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
    this.fetchPositions();
  }

  /**
   * Build the form group.
   * @private
   * @returns void
   **/
  private buildForm(): void {
    this.form = this.fb.nonNullable.group({
      position: ['', Validators.required],
    });
  }

  fetchPositions(): void {
    this.contactService.getPositions().subscribe((positions) => {
      this.positions.set(positions);
      console.log(positions);
      this.isLoading.set(false);
    });
  }

  onPositionFieldBlur(): void {
    this.onTouch();
  }

  /**
   * Validar el control síncronamente.
   * @param control The control to validate.
   * @returns The validation errors or null.
   * */
  validate(): ValidationErrors | null {
    return this.positionField.errors;
  }

  writeValue(value: string): void {
    if (!value) return;
    this.positionField.setValue(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  onPositionChange(event: DropdownChangeEvent): void {
    const position = event.value;
    this.onChange(position);
  }
}
