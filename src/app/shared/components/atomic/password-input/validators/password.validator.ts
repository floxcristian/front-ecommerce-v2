// Angular
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static isValidPassword(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return { passwordRequired: true };
    console.log('control: ', control);
    // Get parent control, then 'password' form control:

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

  static matchPasswords(control: AbstractControl): ValidationErrors | null {
    const confirmPassword = control.value;
    // Get parent control, then 'password' form control:
    const password = control.get('password')?.value;
    return password === confirmPassword
      ? null
      : { passwordConfirmInvalid: true };
    return null;
  }
}
