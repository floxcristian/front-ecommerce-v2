// Angular
import { Component, output } from '@angular/core';
import {
  FormBuilder,
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
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { DocumentIdService } from '../../services/document-id/document-id.service';

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
  enterpriseForm!: FormGroup;
  onGoBack = output<void>();
  onSubmit = output<any>();

  get documentIdField() {
    return this.enterpriseForm.get('documentId');
  }

  get businessNameField() {
    return this.enterpriseForm.get('businessName');
  }

  get businessLineField() {
    return this.enterpriseForm.get('businessLine');
  }

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.enterpriseForm = this.fb.group({
      documentId: [
        null,
        [Validators.required, DocumentIdValidator.isValidDocumentId],
      ],
      businessName: [null, [Validators.required]],
      businessLine: [null, [Validators.required]],
    });
    // Evitar si tiene el mismo valor
    // Dar un tiempo...
    /*this.documentIdField?.events
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((event) => {
        console.log('documentIdField changed', event);
        // this.documentIdField?.setValue(event);
      });*/
  }

  /**
   * Mostrar solo los caracteres editables.
   * @param value
   */
  onDocumentIdFieldFocus(value: string): void {
    const formattedDocumentId = DocumentIdService.getEditableValue(value);
    this.documentIdField?.setValue(formattedDocumentId);
  }

  /**
   * Restringir el ingreso de solo caracteres permitidos.
   * @param value
   */
  onDocumentIdFieldInput(value: string): void {
    const formattedDocumentId = DocumentIdService.getValidCharacters(value);
    this.documentIdField?.setValue(formattedDocumentId);
  }

  /**
   * Al salir del input, formatear el valor.
   * @param value
   */
  onDocumentIdFieldBlur(value: string): void {
    const formattedDocumentId = DocumentIdService.getFormattedDocumentId(value);
    this.documentIdField?.setValue(formattedDocumentId);
  }

  submit(value: any): void {
    this.onSubmit.emit(value);
  }
}
