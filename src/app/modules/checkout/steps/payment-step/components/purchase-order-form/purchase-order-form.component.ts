// Angular
import { Component, inject, ViewChild } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
// Models
import { ControlsOf } from '@shared/models/controls.type';
import { PurchaseOrderForm } from './purchase-order-form.interface';
// Components
import { NumberInputComponent } from '@shared/components/atomic/number-input/number-input.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FileSizePipe } from '@shared/pipes/file-size/file-size.pipe';

const NG_MODULES = [ReactiveFormsModule, CommonModule];
const PRIME_MODULES = [InputTextModule, FileUploadModule, ButtonModule];
const COMPONENTS = [NumberInputComponent];
const PIPES = [FileSizePipe];

@Component({
  selector: 'app-purchase-order-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES, ...COMPONENTS, ...PIPES],
  templateUrl: './purchase-order-form.component.html',
  styleUrl: './purchase-order-form.component.scss',
})
export class PurchaseOrderFormComponent {
  @ViewChild('fileUpload') fileUpload!: FileUpload;
  purchaseOrderForm!: FormGroup<ControlsOf<PurchaseOrderForm>>;
  uploadedFiles: any[] = [];
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

  onFileSelect(event: any): void {
    if (!event.files?.[0]) return;
    this.purchaseOrderForm.patchValue({ file: event.files[0] });
  }

  onFileRemove(event: any) {
    console.log('onFileRemove');
    //this.archivo = null;
    this.purchaseOrderForm.patchValue({
      file: null,
    });
  }

  removeFile() {
    this.fileUpload.clear();
    this.purchaseOrderForm.patchValue({ file: null });
  }

  // Activar el input file oculto
  triggerFileInput() {
    this.fileUpload.choose();
    //this.fileInput.nativeElement.click();
  }

  onUpload(event: any): void {}
}
