// Angular
import { Component, output } from '@angular/core';
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
];

@Component({
  selector: 'app-enterprise-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './enterprise-form.component.html',
  styleUrl: './enterprise-form.component.scss',
})
export class EnterpriseFormComponent {
  onGoBack = output<void>();
  onSubmit = output<IEnterprise>();
  enterpriseForm!: FormGroup<ControlsOf<IEnterprise>>;

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
        [Validators.required, DocumentIdValidator.isValidDocumentId],
      ],
      businessName: ['', [Validators.required]],
      businessLine: ['', [Validators.required]],
    });
  }

  /**
   * Mostrar solo los caracteres editables.
   * @param value
   */
  onDocumentIdFieldFocus(value: string): void {
    const formattedDocumentId = DocumentIdService.getEditableValue(value);
    this.documentIdField.setValue(formattedDocumentId);
  }

  /**
   * Restringir el ingreso de solo caracteres permitidos.
   * @param value
   */
  onDocumentIdFieldInput(value: string): void {
    const formattedDocumentId = DocumentIdService.getValidCharacters(value);
    this.documentIdField.setValue(formattedDocumentId);
  }

  /**
   * Al salir del input, formatear el valor.
   * @param value
   */
  onDocumentIdFieldBlur(value: string): void {
    const formattedDocumentId = DocumentIdService.getFormattedDocumentId(value);
    this.documentIdField.setValue(formattedDocumentId);
  }

  submit(value: IEnterprise): void {
    this.enterpriseForm.getRawValue();
    this.onSubmit.emit(value);
  }
}
