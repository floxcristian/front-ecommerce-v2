// Angular
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
// Directives
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { ControlErrorContainerDirective } from '@shared/directives/validation-message/directives/control-error-container/control-error-container.directive';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { AddressFormControlContainerComponent } from '../address-form-control-container/address-form-control-container.component';
import { AddressFormControlContainerV2Component } from '../address-form-control-container-v2/address-form-control-container-v2.component';

// Eliminar
// accountType, steps, onGoBack

const NG_MODULES = [ReactiveFormsModule, GoogleMapsModule];
const PRIME_MODULES = [
  InputTextModule,
  ButtonModule,
  RippleModule,
  CheckboxModule,
];
const DIRECTIVES = [
  FormSubmitDirective,
  ControlErrorsDirective,
  ControlErrorContainerDirective,
];
const COMPONENTS = [
  AddressFormControlContainerComponent,
  AddressFormControlContainerV2Component,
];

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, DIRECTIVES, COMPONENTS],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponent {
  submitLabel = input.required<string>();
  showBackButton = input<boolean>(false);
  onGoBack = output<void>();
  onSubmit = output<any>();

  addressForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.buildForm();
  }

  private buildForm(): void {
    this.addressForm = this.fb.group({
      newsletter: [false],
      disclaimer: [false, [Validators.requiredTrue]],
    });
  }

  submit(value: any): void {
    console.log('addressForm value: ', this.addressForm.value);
    if (this.addressForm.valid) {
      this.onSubmit.emit(value);
    } else {
      this.addressForm.markAllAsTouched();
    }
  }
}
