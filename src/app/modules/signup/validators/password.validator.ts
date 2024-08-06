import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static isValidPassword(
    control: AbstractControl
  ): Record<string, boolean> | null {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasNumber = /[0-9]/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasLowercaseLetter = /[a-z]/.test(value);
    const hasSpecialCharacter = /[^A-Za-z0-9]/.test(value);
    const hasValidLength = value.length >= 8 && value.length <= 20;
    const isValid =
      hasNumber &&
      hasCapitalLetter &&
      hasLowercaseLetter &&
      hasSpecialCharacter &&
      hasValidLength;
    return isValid ? null : { invalidPassword: true };
  }

  static matchPasswords(
    control: AbstractControl
  ): Record<string, boolean> | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsDoNotMatch: true };
  }
}
