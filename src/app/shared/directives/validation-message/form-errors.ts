import { InjectionToken } from '@angular/core';
import { ErrorsMap } from './types';

export const defaultErrors: ErrorsMap = {
  required: `Este campo es requerido.`,
  invalidDocumentId: `El RUT ingresado no es válido.`,
  minlength: ({ requiredLength, actualLength }) =>
    `Expect ${requiredLength} but got ${actualLength}`,
  exists: `La empresa ya exite.`,
  businessLines: `La empresa no tiene rubros asociados.`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
