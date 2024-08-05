// Angular
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';

const PRIME_MODULES = [SelectButtonModule, ButtonModule, RippleModule];
const NG_MODULES = [ReactiveFormsModule];

@Component({
  selector: 'app-account-type-form',
  standalone: true,
  imports: [NG_MODULES, ...PRIME_MODULES],
  templateUrl: './account-type-form.component.html',
  styleUrl: './account-type-form.component.scss',
})
export class AccountTypeFormComponent {
  @Output() onSubmit: EventEmitter<string> = new EventEmitter();
  accountTypeForm!: FormGroup;
  roleOptions = [
    {
      label: 'Empresa',
      value: 'enterprise',
      icon: 'fa-sharp-duotone fa-solid fa-building',
    },
    {
      label: 'Persona',
      value: 'customer',
      icon: 'fa-sharp-duotone fa-solid fa-user',
    },
  ];

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.accountTypeForm = this.fb.group({
      role: ['enterprise', Validators.required],
    });
  }

  submit(value: any): void {
    console.log('submit: ', value);
    this.onSubmit.emit(this.accountTypeForm.value.role);
  }
}
