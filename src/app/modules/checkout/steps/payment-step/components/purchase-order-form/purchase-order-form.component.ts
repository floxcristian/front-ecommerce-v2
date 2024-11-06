import { Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ControlsOf } from '@shared/models/controls.type';
import { PurchaseOrderForm } from './purchase-order-form.interface';
import { InputTextModule } from 'primeng/inputtext';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [InputTextModule];

@Component({
  selector: 'app-purchase-order-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './purchase-order-form.component.html',
  styleUrl: './purchase-order-form.component.scss',
})
export class PurchaseOrderFormComponent {
  purchaseOrderForm!: FormGroup<ControlsOf<PurchaseOrderForm>>;

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.purchaseOrderForm = this.fb.group({
      code: '',
      amount: 0,
      file: null as File | null,
      costCenterCode: '',
    });
  }
}
