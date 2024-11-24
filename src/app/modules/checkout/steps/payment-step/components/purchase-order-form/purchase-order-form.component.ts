// Angular
import { Component, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
// Models
import { ControlsOf } from '@shared/models/controls.type';
import { CostCenter } from '../cost-center-sidebar/models/cost-center.interface';
import { PurchaseOrderForm } from './models/purchase-order-form.interface';
// Components
import { NumberInputComponent } from '@shared/components/atomic/number-input/number-input.component';
import { FileUploadInputComponent } from '@shared/components/atomic/file-upload-input/file-upload-input.component';
import { CostCenterSidebarComponent } from '../cost-center-sidebar/cost-center-sidebar.component';

const NG_MODULES = [ReactiveFormsModule, CommonModule];
const PRIME_MODULES = [InputTextModule, ButtonModule];
const COMPONENTS = [
  NumberInputComponent,
  FileUploadInputComponent,
  CostCenterSidebarComponent,
];

@Component({
  selector: 'app-purchase-order-form',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS],
  templateUrl: './purchase-order-form.component.html',
  styleUrl: './purchase-order-form.component.scss',
})
export class PurchaseOrderFormComponent {
  @ViewChild('sidebar') sidebar!: CostCenterSidebarComponent;
  purchaseOrderForm!: FormGroup<ControlsOf<PurchaseOrderForm>>;
  uploadedFiles: any[] = [];
  selectedCostCenter = signal<CostCenter | null>({
    name: 'San Bernardo',
    code: 'C020',
  });

  private readonly fb = inject(NonNullableFormBuilder);

  get fileField() {
    return this.purchaseOrderForm.get('file');
  }

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

  onSelectCostCenter(selectedCostCenter: CostCenter): void {
    this.selectedCostCenter.set(selectedCostCenter);
  }
}
