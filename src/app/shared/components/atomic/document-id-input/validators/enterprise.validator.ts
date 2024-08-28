// Angular
import { signal } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
// Rxjs
import {
  catchError,
  delay,
  distinctUntilChanged,
  map,
  mergeMap,
  Observable,
  of,
} from 'rxjs';
// Services
import { CheckUserService } from '@core/api/check-user/check-user.service';

export class EnterpriseValidator {
  static blurred = signal<boolean>(false);
  static canExecuteAsyncValidate = signal<boolean>(false);
  static hasAsyncData = signal<boolean>(false);
  static isLoading = signal<boolean>(false);
  static businessName = signal<string>('');
  static businessLines = signal<any[]>([]);
  static lastValue = signal<string>('');

  static isValidEnterprise2(service: CheckUserService): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;

      //const formattedChileanValue = value.slice(0, -1) + '-' + value.slice(-1);
      this.isLoading.set(true);
      //console.log('>> seteo blurred en falsexxxxxxxx');
      // EnterpriseValidator.blurred.set(false);
      EnterpriseValidator.canExecuteAsyncValidate.set(false);
      return service.checkEnterpriseUser(value).pipe(
        distinctUntilChanged(),
        delay(5000),
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

  static isValidEnterprise(service: CheckUserService) {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return of(control.value).pipe(
        mergeMap((value: string) => {
          this.isLoading.set(true);
          // EnterpriseValidator.blurred.set(false);
          EnterpriseValidator.hasAsyncData.set(false);
          EnterpriseValidator.canExecuteAsyncValidate.set(false);
          return service.checkEnterpriseUser(value).pipe(
            map((res: any) => {
              this.isLoading.set(false);
              EnterpriseValidator.lastValue.set(value);
              if (res.exists) {
                return { exists: true };
              } else {
                EnterpriseValidator.businessName.set(res.businessName);
                EnterpriseValidator.businessLines.set(res.businessLines);
                EnterpriseValidator.hasAsyncData.set(true);
                return null;
              }
            }),
            catchError(() => {
              this.isLoading.set(false);
              return of({ validationApiError: true });
            })
          );
        })
      );
      /*const value = control.value;

      //const formattedChileanValue = value.slice(0, -1) + '-' + value.slice(-1);
      this.isLoading.set(true);
      //console.log('>> seteo blurred en falsexxxxxxxx');
      // EnterpriseValidator.blurred.set(false);
      return service.checkEnterpriseUser(value).pipe(
        distinctUntilChanged(),
        delay(5000),
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
      );*/
    };
  }
}
