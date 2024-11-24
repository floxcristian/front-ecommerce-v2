import { NgClass } from '@angular/common';
import { Component, inject, input, OnInit, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ControlsOf } from '@shared/models/controls.type';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DocumentType } from '@shared/models/document-type.type';
import { DocumentTypeOption } from './models/document-type-option.interface';

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [RadioButtonModule];

@Component({
  selector: 'app-document-type-form',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './document-type-form.component.html',
  styleUrl: './document-type-form.component.scss',
  host: { class: 'w-full' },
})
export class DocumentTypeFormComponent implements OnInit {
  documentType = input.required<DocumentType>();
  onChange = output<DocumentType>();

  documentTypes: DocumentTypeOption[] = [
    { title: 'Boleta', value: 'RECEIPT' },
    { title: 'Factura', value: 'INVOICE' },
  ];
  documentTypeForm!: FormGroup<ControlsOf<{ documentType: DocumentType }>>;

  get documentTypeField() {
    return this.documentTypeForm.get('documentType');
  }

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.documentTypeForm = this.fb.group({
      documentType: this.documentType(),
    });
  }

  /**
   * Handle the recipient type selection.
   * @param value
   */
  onSelectDocumentType(value: DocumentType): void {
    this.documentTypeForm.setValue({ documentType: value });
    this.onChange.emit(value);
  }
}
