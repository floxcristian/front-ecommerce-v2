// Angular
import {
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { CurrencyPipe, NgClass } from '@angular/common';
// Models
import { ControlsOf } from '@shared/models/controls.type';
// Pipes
import { ShippingDatePipe } from '@shared/pipes/shipping-date/shipping-date.pipe';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';

const NG_MODULES = [CurrencyPipe, NgClass, ReactiveFormsModule];
const PIPES = [ShippingDatePipe];
const PRIME_MODULES = [SidebarModule, ButtonModule, RadioButtonModule];

export interface AvailableDate {
  id: string;
  date: Date;
  price: number;
}

type FormAvailableDate = {
  [K in keyof AvailableDate]: AvailableDate[K] | null;
};

@Component({
  selector: 'app-group-date-sidebar',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, PIPES],
  templateUrl: './group-date-sidebar.component.html',
  styleUrl: './group-date-sidebar.component.scss',
})
export class GroupDateSidebarComponent implements OnInit {
  availableDates = input.required<AvailableDate[]>();
  onSubmit = output<AvailableDate>();
  visible = signal<boolean>(false);
  todayDate = new Date();

  dateForm!: FormGroup<ControlsOf<FormAvailableDate>>;

  get idField() {
    return this.dateForm.get('id');
  }

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
  }

  ngOnInit(): void {
    this.dateForm.setValue({
      id: this.availableDates()[0].id,
      date: this.availableDates()[0].date,
      price: this.availableDates()[0].price,
    });
  }

  private buildForm(): void {
    this.dateForm = this.fb.group({
      id: new FormControl<string | null>(''),
      date: new FormControl<Date | null>(null),
      price: new FormControl<number | null>(null),
    });
  }

  show(): void {
    this.visible.set(true);
  }

  saveDateAndClose(): void {
    this.visible.set(false);
    const formData = this.dateForm.getRawValue();
    if (this.validateNoNulls(formData)) {
      this.onSubmit.emit(formData);
    }
  }

  onSelectDate(index: number): void {
    const selectedDate = this.availableDates()[index];
    this.dateForm.setValue({
      id: selectedDate.id,
      date: selectedDate.date,
      price: selectedDate.price,
    });
  }

  private validateNoNulls(data: FormAvailableDate): data is AvailableDate {
    return Object.values(data).every((value) => value !== null);
  }
}
