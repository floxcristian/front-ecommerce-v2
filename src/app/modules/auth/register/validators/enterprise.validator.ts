// Angular
import { signal } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
// Rxjs
import { distinct, distinctUntilChanged, map } from 'rxjs';
// Services
import { CheckUserService } from '@core/api/check-user/check-user.service';

export class EnterpriseValidator {
  static blurred = signal<boolean>(false);
  static isLoading = signal<boolean>(false);
  static businessName = signal<string>('');
  static businessLines = signal<any[]>([]);
  static lastValue = signal<string>('');

  static isValidEnterprise(service: CheckUserService): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;

      //const formattedChileanValue = value.slice(0, -1) + '-' + value.slice(-1);
      this.isLoading.set(true);
      EnterpriseValidator.blurred.set(false);
      return service.checkEnterpriseUser(value).pipe(
        distinctUntilChanged(),
        map((res: any) => {
          this.isLoading.set(false);
          EnterpriseValidator.lastValue.set(value);
          if (res.exists) {
            return { exists: true };
          } else {
            EnterpriseValidator.businessName.set(res.businessName);
            EnterpriseValidator.businessLines.set(res.businessLines);

            return null;
          }
        })
      );
    };
  }
}
