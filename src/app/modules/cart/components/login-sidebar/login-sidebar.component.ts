import { Component, inject, signal } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmailInputComponent } from '@shared/components/atomic/email-input/email-input.component';
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
import { ControlsOf } from '@shared/models/controls.type';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';

const NG_MODULES = [ReactiveFormsModule];
const PRIME_MODULES = [
  SidebarModule,
  ButtonModule,
  DividerModule,
  InputTextModule,
];
const COMPONENTS = [EmailInputComponent];
const DIRECTIVES = [FormSubmitDirective, ControlErrorsDirective];

@Component({
  selector: 'app-login-sidebar',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES, COMPONENTS, DIRECTIVES],
  templateUrl: './login-sidebar.component.html',
  styleUrl: './login-sidebar.component.scss',
})
export class LoginSidebarComponent {
  visible = signal<boolean>(false);
  loginForm!: FormGroup<ControlsOf<{ email: string; password: string }>>;

  private readonly fb = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);

  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  show(): void {
    this.visible.set(true);
  }

  submit() {
    this.router.navigate(['/checkout']);
  }
}
