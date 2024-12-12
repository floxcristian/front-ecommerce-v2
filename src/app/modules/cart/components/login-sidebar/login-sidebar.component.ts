// Angular
import { Component, inject, signal } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
// Models
import { ControlsOf } from '@shared/models/controls.type';
// Directives
import { ControlErrorsDirective } from '@shared/directives/validation-message/directives/control-errors/control-errors.directive';
import { FormSubmitDirective } from '@shared/directives/validation-message/directives/form-submit/form-submit.directive';
// Components
import { EmailInputComponent } from '@shared/components/atomic/email-input/email-input.component';
import { AuthService } from '@core/services/auth/auth.service';

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
  private readonly authService = inject(AuthService);

  constructor() {
    this.buildForm();
  }

  private buildForm(): void {
    this.loginForm = this.fb.group({
      email: [''], //  Validators.required
      password: [''], // Validators.required
    });
  }

  show(): void {
    this.visible.set(true);
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  goToCreateAccount(): void {
    this.router.navigate(['/auth/register']);
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.setIsLoggedIn(true);
      //this.onSubmit.emit(value);
      this.goToCheckout();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
