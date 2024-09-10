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

  /**
   * Compare two email fields.
   * @param control The control to validate.
   * @returns The validation errors or null.
   **/
  /*static matchEmails(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email')?.value;
    const confirmEmail = control.get('confirmEmail')?.value;
    return email === confirmEmail ? null : { EmailConfirmInvalid: true };
  }*/

  static matchEmails(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email')?.value;
    const confirmEmail = control.get('confirmEmail')?.value;
    if (!confirmEmail) return { required: true };
    control
      .get('confirmEmail')
      ?.setErrors(
        email === confirmEmail ? null : { emailConfirmInvalid: true }
      );
    return null;
  }

  static matchValidator(matchTo: string, reverse?: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Si tiene reverse (email)
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value === (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }

  static matchValidator2(
    matchTo: string,
    reverse?: boolean
  ): ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      // Si tiene reverse (email)
      if (control.parent && reverse) {
        const c = (control.parent?.controls as any)[matchTo] as AbstractControl;
        // const reverseControl = control.parent.controls[matchTo];
        if (c) {
          c.updateValueAndValidity();
        }
        return null;
      }
      return !!control.parent &&
        !!control.parent.value &&
        control.value === (control.parent?.controls as any)[matchTo].value
        ? null
        : { matching: true };
    };
  }
}
