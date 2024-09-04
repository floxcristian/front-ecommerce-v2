// Angular
import { InjectionToken } from '@angular/core';
// Types
import { ErrorsMap } from './types';
// Environment
import { environment } from '@env/environment';

export const defaultErrors: ErrorsMap = {
  // Common
  required: `Este campo es requerido`,
  validationApiError: `Ha ocurrido un error al validar el RUT. Por favor intente más tarde.`,
  minlength: ({ requiredLength, actualLength }) =>
    `Expect ${requiredLength} but got ${actualLength}`,
  // Business Lines
  businessLines: `La empresa no tiene rubros asociados.`,
  // Enterprise Document ID
  exists: `La empresa ya existe en nuestros registros.`,
  // Document ID
  documentIdRequired: `El ${environment.documentId.customerLabel} es un campo requerido.`,
  documentIdInvalid: `El ${environment.documentId.customerLabel} ingresado no es válido.`,
  // Password
  passwordRequired: `La contraseña es un campo requerido.`,
  passwordMinLength: `La contraseña debe tener al menos 8 caracteres.`,
  passwordMaxLength: `La contraseña no puede tener más de 20 caracteres.`,
  // Email
  emailInvalid: `El correo electrónico ingresado no es válido.`,
  // Phone
  phoneRequired: `El teléfono es un campo requerido.`,
  phoneMinLength: `El teléfono debe tener al menos 9 dígitos.`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
