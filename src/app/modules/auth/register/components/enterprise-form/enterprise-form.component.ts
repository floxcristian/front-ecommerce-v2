// Angular
import {
  ChangeDetectorRef,
  Component,
  inject,
  input,
  OnInit,
  output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
//Rxjs
import { distinctUntilChanged } from 'rxjs';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
// Environment
import { environment } from '@env/environment';
// Models
import { Enterprise } from './enterprise.interface';
import { ControlsOf } from '@shared/models/controls.type';
// Directives
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
// Validators
import { EnterpriseValidator } from '@shared/components/atomic/document-id-input/validators/enterprise.validator';
// Components
import { DocumentIdInputComponent } from '@shared/components/atomic/document-id-input/document-id-input.component';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [
  CheckboxModule,
  InputTextModule,
  RippleModule,
  ButtonModule,
  CommonModule,
  IconFieldModule,
  InputIconModule,
  DropdownModule,
];
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];

@Component({
  selector: 'app-enterprise-form',
  standalone: true,
  imports: [
    ...NG_MODULES,
    ...PRIME_MODULES,
    ...DIRECTIVES,
    DocumentIdInputComponent,
  ],
  templateUrl: './enterprise-form.component.html',
  styleUrl: './enterprise-form.component.scss',
})
export class EnterpriseFormComponent implements OnInit {
  @ViewChild('dropdownElement') dropdown!: Dropdown;

  data = input.required<Enterprise | null>();
  steps = input.required<number>();
  onGoBack = output<void>();
  onSubmit = output<Enterprise>();

  enterpriseForm!: FormGroup<ControlsOf<Enterprise>>;
  documentIdLabel = environment.documentId.enterpriseLabel;
  hasAsyncData = EnterpriseValidator.hasAsyncData;
  businessName = EnterpriseValidator.businessName;
  businessLines = EnterpriseValidator.businessLines;
  canExecuteAsyncValidate = EnterpriseValidator.canExecuteAsyncValidate;
  //
  isLoading = EnterpriseValidator.isLoading;
  lastValue = EnterpriseValidator.lastValue;

  private readonly fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  get documentIdField() {
    return this.enterpriseForm.controls.documentId;
  }

  get businessNameField() {
    return this.enterpriseForm.controls.businessName;
  }

  get businessLineField() {
    return this.enterpriseForm.controls.businessLineCode;
  }

  // #region Lifecycle
  ngOnInit(): void {
    this.buildForm();
  }
  // #endregion

  /**
   * Construir el formulario.
   */
  private buildForm(): void {
    this.enterpriseForm = this.fb.nonNullable.group({
      documentId: [
        this.data()?.documentId || '' /*,
        {
          validators: [
            Validators.required,
            DocumentIdValidator.isValidDocumentId,
          ],
          asyncValidators: [
            blurTriggeredAsyncValidator(
              EnterpriseValidator.isValidEnterprise(this.checkUserService)
            ),
          ],
        },*/,
      ],
      businessName: [
        { value: this.data()?.businessName || '', disabled: true },
        [Validators.required],
      ],
      businessLineCode: [
        {
          value: this.data()?.businessLineCode || '',
          disabled: this.data() ? false : true,
        },
        [Validators.required],
      ],
      businessLineName: [
        this.data()?.businessLineName || '',
        [Validators.required],
      ],
    });
    this.onDocumentIdChange();
    this.onBusinessLineChange();
  }

  /**
   * Mostrar solo los caracteres editables.
   * @param value
   */
  /*onDocumentIdFieldFocus(value: string): void {
    this.isLoading.set(false);
    const formattedDocumentId = DocumentIdService.getEditableValue(value);
    this.documentIdField.setValue(formattedDocumentId, { emitEvent: false });
    this.blurred.set(false);
  }*/

  /**
   * Restringir el ingreso de solo caracteres permitidos.
   * @param value
   */
  /*onDocumentIdFieldInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const formattedDocumentId = DocumentIdService.getValidCharacters(
      inputElement.value
    );
    this.documentIdField.setValue(formattedDocumentId, { emitEvent: false });
  }*/

  /**
   * Al salir del input, formatear el valor.
   * @param value
   */
  /*onDocumentIdFieldBlur(value: string): void {
    const formattedDocumentId = DocumentIdService.getFormattedDocumentId(value);
    this.blurred.set(true);
    this.documentIdField.setValue(formattedDocumentId, { emitEvent: true });
    //this.documentIdField.updateValueAndValidity();
  }*/

  private onDocumentIdChange(): void {
    this.documentIdField.valueChanges.subscribe((value) => {
      console.log('[parent][valueChanges] value: ', value);
      console.log('[parent][valueChanges] lastValue: ', this.lastValue());
      // FIXME: para que uso esto?
      if (this.lastValue() && this.lastValue() !== value) {
        this.lastValue.set('');
        this.hasAsyncData.set(false);
        this.businessName.set('');
        this.businessLines.set([]);
        this.enterpriseForm.patchValue(
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
      this.cdr.detectChanges();
      //console.log('*************************************');
      //console.log('[parent][statusChanges] status: ', status);
      // console.log('[parent][statusChange] blurred: ', this.blurred());
      //console.log('*************************************');

      console.log('intentando cargar data business con estado: ', status);
      if (status === 'INVALID') {
        this.enterpriseForm.patchValue({
          businessName: '',
          businessLineCode: '',
          businessLineName: '',
        });
        this.businessLineField.disable();
      } else if (status === 'VALID' && this.hasAsyncData()) {
        console.log('entre a setear porque tengo businessLines:::::');
        // FIXME: cuando intento asignarlo al form, no se lográ asignar porque aun no tiene los valores de businessName y businessLines.
        // Se debe controlar que pase a estado PENDING.
        this.enterpriseForm.patchValue({
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
        // console.log('<onBusinessLineChange: ', value);
        this.enterpriseForm.patchValue({
          businessLineName: this.businessLines().find(
            (line) => line.code === Number(value)
          )?.name,
        });
      });
  }

  /**
   * Enviar el formulario.
   * @param value
   * @returns void
   * @example
   * submit({
   *  documentId: '123456789',
   *  businessName: 'My business',
   *  businessLineName: 'My business line',
   *  businessLineCode: '1234'
   * });
   **/
  submit(value: Enterprise): void {
    if (this.enterpriseForm.valid) {
      this.enterpriseForm.getRawValue();
      this.onSubmit.emit(value);
    } else {
      this.enterpriseForm.markAllAsTouched();
    }
  }
}
