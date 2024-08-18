// Angular
import { Component, inject, output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { DocumentIdValidator } from '../../validators/document-id.validator';

// Services
import { DocumentIdService } from '../../services/document-id/document-id.service';
// Models
import { IEnterprise } from './enterprise.interface';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { CheckUserService } from 'src/app/core/api/check-user/check-user.service';
import { EnterpriseValidator } from '../../validators/enterprise.validator';
import { CommonModule } from '@angular/common';

export type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [
  CheckboxModule,
  InputTextModule,
  RippleModule,
  ButtonModule,
  CommonModule,
];
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];

@Component({
  selector: 'app-enterprise-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES, ...DIRECTIVES],
  templateUrl: './enterprise-form.component.html',
  styleUrl: './enterprise-form.component.scss',
})
export class EnterpriseFormComponent {
  onGoBack = output<void>();
  onSubmit = output<IEnterprise>();
  enterpriseForm!: FormGroup<ControlsOf<IEnterprise>>;
  private readonly checkUserService = inject(CheckUserService);

  get documentIdField() {
    return this.enterpriseForm.controls.documentId;
  }

  get businessNameField() {
    return this.enterpriseForm.controls.businessName;
  }

  get businessLineField() {
    return this.enterpriseForm.controls.businessLine;
  }

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.enterpriseForm = this.fb.nonNullable.group({
      documentId: [
        '',
        {
          validators: [
            Validators.required,
            DocumentIdValidator.isValidDocumentId,
          ],
          asyncValidators: [
            EnterpriseValidator.isValidEnterprise(this.checkUserService),
          ],
          updateOn: 'blur',
        },
      ],
      businessName: ['', [Validators.required]],
      businessLine: ['', [Validators.required]],
    });
    this.onDocumentIdChange();
    this.onBusinessNameChange();
    this.onBusinessLineChange();
  }

  /**
   * Mostrar solo los caracteres editables.
   * @param value
   */
  onDocumentIdFieldFocus(value: string): void {
    const formattedDocumentId = DocumentIdService.getEditableValue(value);
    console.log('setValueOnDocumentIdFieldFocusEvent: ', formattedDocumentId);
    this.documentIdField.setValue(formattedDocumentId, { emitEvent: false });
  }

  /**
   * Restringir el ingreso de solo caracteres permitidos.
   * @param value
   */
  onDocumentIdFieldInput(value: string): void {
    console.log('onDocumentIdFieldInput: ', value);
    /*const formattedDocumentId = DocumentIdService.getValidCharacters(value);
    console.log('setValueOnDocumentIdFieldInputEvent: ', formattedDocumentId);
    this.documentIdField.setValue(formattedDocumentId);*/
  }

  /**
   * Al salir del input, formatear el valor.
   * @param value
   */
  onDocumentIdFieldBlur(value: string): void {
    const formattedDocumentId = DocumentIdService.getFormattedDocumentId(value);
    console.log('setValueOnDocumentIdFieldBlurEvent: ', formattedDocumentId);
    this.documentIdField.setValue(formattedDocumentId, { emitEvent: false });
  }

  submit(value: IEnterprise): void {
    if (this.enterpriseForm.valid) {
      this.enterpriseForm.getRawValue();
      this.onSubmit.emit(value);
    } else {
      // Nicolas molina. 2021-09-29. Se agrega el método markAllAsTouched para marcar todos los campos como tocados y mostrar errores.
      this.enterpriseForm.markAllAsTouched();
    }
  }

  /***************************
   * SOLO PARA PRUEBAS UNITARIAS
   ***************************/
  onDocumentIdChange() {
    this.documentIdField.valueChanges.subscribe((value) => {
      console.log('onDocumentIdChange: ', value);
    });
  }

  onBusinessNameChange() {
    this.businessNameField.valueChanges.subscribe((value) => {
      console.log('onBusinessNameChange: ', value);
    });
  }

  onBusinessLineChange() {
    this.businessLineField.valueChanges.subscribe((value) => {
      console.log('onBusinessLineChange: ', value);
    });
  }
}
