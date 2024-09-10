// Angular
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class EmailValidator {
  /**
   * Validate an email field.
   * @param control The control to validate.
   * @returns The validation errors or null.
   **/
  static isValidEmail(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return { emailRequired: true };
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(control.value);
    return isValid ? null : { emailInvalid: true };
  }

  static matchEmails(matchTo: string): ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const reverseControl = control?.parent?.get(matchTo);
      const isValid =
        !!control.parent?.value && control.value === reverseControl?.value;
      return isValid ? null : { emailConfirmInvalid: true };
    };
  }
}
