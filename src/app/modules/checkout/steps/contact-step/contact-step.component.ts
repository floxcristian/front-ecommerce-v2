// Angular
import { Component, inject } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
// Directives
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
// Models
import { ControlsOf } from '@shared/models/controls.type';
// Components
import { DocumentIdInputComponent } from '@shared/components/atomic/document-id-input/document-id-input.component';
import { PhoneInputComponent } from '@shared/components/atomic/phone-input/phone-input.component';
import { EmailInputComponent } from '@shared/components/atomic/email-input/email-input.component';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { NgClass } from '@angular/common';

interface Guest {
  documentId: string;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

const NG_MODULES = [ReactiveFormsModule, NgClass];
const PRIME_MODULES = [
  InputTextModule,
  PasswordModule,
  ButtonModule,
  DividerModule,
];
const COMPONENTS = [
  DocumentIdInputComponent,
  PhoneInputComponent,
  EmailInputComponent,
];
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];

@Component({
  selector: 'app-contact-step',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS, DIRECTIVES],
  templateUrl: './contact-step.component.html',
  styleUrl: './contact-step.component.scss',
  host: { class: 'w-full' },
})
export class ContactStepComponent {
  contactForm!: FormGroup<ControlsOf<Guest>>;
  loginForm!: FormGroup<ControlsOf<{ email: string; password: string }>>;

  features = [
    {
      title: 'Despacho gratis',
      description:
        'Aprovecha despacho gratuito a domicilio por compras sobre $60.000 a todo Chile.',
      icon: 'fa-box-taped',
      //icon: 'fa-address-book',
    },
    {
      title: 'Paga seguro',
      description:
        'En 4 cuotas sin interés con tus tarjetas preferidas, también contamos con Mercado Pago y aceptamos transferencias.',
      icon: 'fa-credit-card',
    },
    {
      title: 'Comodidad 24/7',
      description:
        'Compra en cualquier momento del día en implementos.cl, ¡abierto las 24 horas!',
      icon: 'fa-gift',
    },
  ];

  private readonly fb = inject(NonNullableFormBuilder);
  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.contactForm = this.fb.group({
      documentId: this.fb.control('', []),
      name: this.fb.control('', []),
      lastName: this.fb.control('', []),
      phone: this.fb.control('', []),
      email: this.fb.control('', []),
    });

    this.loginForm = this.fb.group({
      email: this.fb.control('', []),
      password: this.fb.control('', []),
    });
  }

  submit() {}
}
