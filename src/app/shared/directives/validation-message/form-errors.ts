import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: (): string => `This field is required.`,
  minlength: ({
    requiredLength,
    actualLength,
  }: {
    requiredLength: number;
    actualLength: number;
  }): string => `Expect ${requiredLength} but got ${actualLength}`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
