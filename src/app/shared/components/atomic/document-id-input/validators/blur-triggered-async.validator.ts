// Angular
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
// Rxjs
import { from, map, of } from 'rxjs';
// Validator
import { EnterpriseValidator } from './enterprise.validator';

export function blurTriggeredAsyncValidator(
  asyncValidator: AsyncValidatorFn
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;
    console.log('[child][blurTriggeredAsyncValidator]');
    // control.markAsPending();
    if (
      !EnterpriseValidator.canExecuteAsyncValidate() ||
      EnterpriseValidator.lastValue() === value
    ) {
      console.log('[child][blurTriggeredAsyncValidator] blurred: false');
      //control.setErrors({ pending: true });
      return of(null);
    }

    // Aquí establecemos el estado PENDING manualmente
    console.log('[child][blurTriggeredAsyncValidator] blurred: true');
    //control.markAsPending({ onlySelf: true });
    // setear estado en pending
    //this.control.setAsyncValidators(asyncValidator);
    return asyncValidator(control);
    /*.pipe(
      map((result) => {
        if (control.hasError('pending')) {
          const { pending, ...rest } = control.errors || {};
          control.setErrors(Object.keys(rest).length ? rest : null);
        }
        return result;
      })
    );*/
  };
}
