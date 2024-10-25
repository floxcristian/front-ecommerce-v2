// Angular
import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
// PrimeNG
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
// Components
import { DocumentIdInputComponent } from '@shared/components/atomic/document-id-input/document-id-input.component';
import { PhoneInputComponent } from '@shared/components/atomic/phone-input/phone-input.component';

const NG_MODULES = [
  NgClass,
  ReactiveFormsModule,
  DocumentIdInputComponent,
  PhoneInputComponent,
];
const PRIME_MODULES = [RadioButtonModule, InputTextModule];

@Component({
  selector: 'app-pickup-person-form',
  standalone: true,
  imports: [...NG_MODULES, ...PRIME_MODULES],
  templateUrl: './pickup-person-form.component.html',
  styleUrl: './pickup-person-form.component.scss',
  host: { class: 'w-full' },
})
export class PickupPersonFormComponent {
  get recipientTypeField() {
    return this.recipientForm.get('recipientType');
  }

  recipientForm!: FormGroup;
  anotherRecipientForm!: FormGroup;

  recipientTypes = [
    {
      title: 'Yo voy a retirar el pedido',
      value: 'SELF',
    },
    {
      title: 'Otra persona también puede retirar el pedido',
      value: 'ANOTHER',
    },
  ];

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.recipientForm = this.fb.group({
      recipientType: ['SELF'],
    });
    this.anotherRecipientForm = this.fb.group({
      name: [''],
      lastName: [''],
      documentId: [''],
      phone: [''],
    });
  }

  submit(value: any): void {
    console.log('Submit', value);
  }

  /**
   * Handle the recipient type selection.
   * @param value
   */
  onSelectRecipientType(value: string): void {
    console.log('Selected recipient type', value);
    this.recipientForm.patchValue({ recipientType: value });
  }
}
