// Angular
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
// Rxjs
import { of } from 'rxjs';
// Validator
import { EnterpriseValidator } from './enterprise.validator';

export function blurTriggeredAsyncValidator(
  asyncValidator: AsyncValidatorFn
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (!EnterpriseValidator.blurred()) {
      return of(null);
    }
    return asyncValidator(control);
  };
}
