import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { CheckUserService } from '@core/api/check-user/check-user.service';
import { map, switchMap, timer } from 'rxjs';

export class EnterpriseValidator {
  static isValidEnterprise(service: CheckUserService): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;
      console.log('value on validate: ', value);
      const formattedChileanValue = value.slice(0, -1) + '-' + value.slice(-1);
      return timer(1000).pipe(
        switchMap(() =>
          service.checkEnterpriseUser(value).pipe(
            map((res: any) => {
              if (res.exists) {
                return { exists: true };
              } else {
                return null;
              }
            })
          )
        )
      );
    };
  }
}
