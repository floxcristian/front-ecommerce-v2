// Angular
import { AbstractControl, ValidationErrors } from '@angular/forms';
// Models
import { CountryCode } from '@env/config.interface';
// Environment
import { environment } from '@env/environment';

export class PhoneValidator {
  static isValidPhone(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return { phoneRequired: true };
    const validators: Record<CountryCode, (phone: string) => boolean> = {
      CL: PhoneValidator.isValidChileanPhone,
      PE: PhoneValidator.isValidPeruvianPhone,
    };
    const validator = validators[environment.country];
    const isValid = validator(control.value);
    return isValid ? null : { phoneInvalid: true };
  }

  static isValidChileanPhone(phone: string): boolean {
    const phoneRegex = /^[92][0-9]{8}$/;
    return phoneRegex.test(phone);
  }

  static isValidPeruvianPhone(phone: string): boolean {
    return true;
  }
}
