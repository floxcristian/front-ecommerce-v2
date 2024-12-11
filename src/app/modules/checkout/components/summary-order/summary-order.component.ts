import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

const NG_MODULES = [CurrencyPipe, ReactiveFormsModule];
const PRIME_MODULES = [CheckboxModule];

@Component({
  selector: 'app-summary-order',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './summary-order.component.html',
  styleUrl: './summary-order.component.scss',
  host: {
    class:
      'col-12 lg:col-6 px-4 py-8 md:px-6 lg:px-8 surface-50 hidden lg:block',
  },
})
export class SummaryOrderComponent {
  formGroup!: FormGroup;
  products = [
    {
      name: 'Bateria 150 amp 900 cca borne estandar',
      quantity: 2,
      price: 137990,
      image: 'https://images.implementos.cl/img/150/POWBAT0036-1.jpg',
    },
    {
      name: 'Llanta disco 8.25x22.5 pulg europea aluminio',
      quantity: 3,
      price: 137990,
      image: 'https://images.implementos.cl/img/150/BETLLA0001-1.jpg',
    },
    {
      name: 'Aceite hidraulico indiana iso 68 19 lts',
      quantity: 4,
      price: 137990,
      image: 'https://images.implementos.cl/img/150/LUBIND0003-1.jpg',
    },
  ];
  private readonly fb = inject(FormBuilder);
  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.formGroup = this.fb.group({
      condition: [],
    });
  }
}
