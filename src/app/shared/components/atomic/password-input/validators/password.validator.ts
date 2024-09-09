// Angular
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static isValidPassword(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return { passwordRequired: true };
    // Al menos una letra minúscula:
    if (!/[a-z]/.test(control.value)) return { passwordLowercase: true };
    // Al menos una letra mayúscula:
    if (!/[A-Z]/.test(control.value)) return { passwordUppercase: true };
    // Al menos un número:
    if (!/[0-9]/.test(control.value)) return { passwordNumber: true };
    // Al menos 8 caracteres:
    if (control.value.length < 8) return { passwordMinLength: true };
    return null;
  }

  static matchPasswords(
    control: AbstractControl
  ): Record<string, boolean> | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (!confirmPassword) return { required: true };
    control
      .get('confirmPassword')
      ?.setErrors(
        password === confirmPassword ? null : { passwordConfirmInvalid: true }
      );
    return null;
  }
}
