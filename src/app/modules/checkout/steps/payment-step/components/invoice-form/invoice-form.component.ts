// Angular
import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// PrimeNG
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
// Environment
import { environment } from '@env/environment';
// Rxjs
import { distinctUntilChanged } from 'rxjs';
// Models
import { ControlsOf } from '@shared/models/controls.type';
import { InvoiceForm } from './models/invoice-form.interface';
// Components
import { DocumentIdInputComponent } from '@shared/components/atomic/document-id-input/document-id-input.component';
import { EmailInputComponent } from '@shared/components/atomic/email-input/email-input.component';
// Directives
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
// Validators
import { EnterpriseValidator } from '@shared/components/atomic/document-id-input/validators/enterprise.validator';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [
  IconFieldModule,
  InputIconModule,
  InputTextModule,
  DropdownModule,
];
const COMPONENTS = [DocumentIdInputComponent, EmailInputComponent];
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];

@Component({
  selector: 'app-invoice-form',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS, DIRECTIVES],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.scss',
})
export class InvoiceFormComponent {
  @ViewChild('dropdownElement') dropdown!: Dropdown;

  //#region Properties
  isLoading = EnterpriseValidator.isLoading;
  lastValue = EnterpriseValidator.lastValue;
  hasAsyncData = EnterpriseValidator.hasAsyncData;
  businessName = EnterpriseValidator.businessName;
  businessLines = EnterpriseValidator.businessLines;
  documentIdLabel = environment.documentId.businessLabel;
  invoiceForm!: FormGroup<ControlsOf<InvoiceForm>>;
  //#endregion

  //#region Getters
  get documentIdField() {
    return this.invoiceForm.controls.documentId;
  }

  get businessNameField() {
    return this.invoiceForm.controls.businessName;
  }

  get businessLineField() {
    return this.invoiceForm.controls.businessLineCode;
  }
  //#endregion

  //#region Constructor
  private readonly fb = inject(NonNullableFormBuilder);
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    this.buildForm();
  }
  //#endregion

  private buildForm(): void {
    this.invoiceForm = this.fb.group({
      email: '',
      documentId: '',
      businessName: '',
      businessLineName: '',
      businessLineCode: '',
    });
    this.onDocumentIdChange();
    this.onBusinessLineChange();
  }

  private onDocumentIdChange(): void {
    this.documentIdField.valueChanges.subscribe((value) => {
      console.log('onDocumentIdChange: ', value);
      if (this.lastValue() && this.lastValue() !== value) {
        this.lastValue.set('');
        this.hasAsyncData.set(false);
        this.businessName.set('');
        this.businessLines.set([]);
        this.invoiceForm.patchValue(
          {
            businessName: '',
            businessLineCode: '',
            businessLineName: '',
          },
          { emitEvent: false }
        );
        this.businessLineField.markAsUntouched();
        this.businessLineField.markAsPristine();
        this.businessLineField.updateValueAndValidity();
      }
    });

    this.documentIdField.statusChanges.subscribe((status) => {
      console.log('statusChanges: ', status);
      this.cdr.detectChanges();
      if (status === 'INVALID') {
        this.invoiceForm.patchValue({
          businessName: '',
          businessLineCode: '',
          businessLineName: '',
        });
        this.businessLineField.disable();
      } else if (status === 'VALID' && this.hasAsyncData()) {
        // FIXME: cuando intento asignarlo al form, no se lográ asignar porque aun no tiene los valores de businessName y businessLines.
        // Se debe controlar que pase a estado PENDING.
        this.invoiceForm.patchValue({
          businessName: this.businessName(),
          businessLineCode: this.businessLines()[0].code,
          businessLineName: this.businessLines()[0].name,
        });

        this.businessLineField.enable();
        this.dropdown.focus();
      }
    });
  }

  private onBusinessLineChange(): void {
    this.businessLineField.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        this.invoiceForm.patchValue({
          businessLineName: this.businessLines().find(
            (line) => line.code === value
          )?.name,
        });
      });
  }
}
