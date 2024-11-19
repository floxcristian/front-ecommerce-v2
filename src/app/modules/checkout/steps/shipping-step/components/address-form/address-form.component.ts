// Angular
import { Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { ControlsOf } from '@shared/models/controls.type';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [InputTextModule];

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  // recipientAnotherForm!: FormGroup<ControlsOf<RecipientAnother>>;

  private readonly fb = inject(NonNullableFormBuilder);

  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    /*this.recipientAnotherForm = this.fb.group({
      name: '',
      lastName: '',
      documentId: '',
      phone: '',
    });*/
  }
}
