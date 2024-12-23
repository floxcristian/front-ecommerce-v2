// Angular
import { InjectionToken } from '@angular/core';
// Types
import { ErrorsMap } from './types';
// Environment
import { environment } from '@env/environment';

export const defaultErrors: ErrorsMap = {
  // Common
  required: `Este campo es requerido.`,
  minlength: ({ requiredLength, actualLength }) =>
    `Expect ${requiredLength} but got ${actualLength}`,
  // Document ID Personal
  documentIdRequired: `El ${environment.documentId.personalLabel} es un campo requerido.`,
  documentIdInvalid: `El ${environment.documentId.personalLabel} ingresado no es válido.`,
  documentIdAlreadyExists: `El ${environment.documentId.personalLabel} ya existe en nuestros registros.`,
  documentIdServer: `Ha ocurrido un error al validar el ${environment.documentId.personalLabel}. Por favor intente más tarde.`,
  // Document ID Business
  documentIdBusinessRequired: `El ${environment.documentId.businessLabel} es un campo requerido.`,
  documentIdBusinessInvalid: `El ${environment.documentId.businessLabel} ingresado no es válido.`,
  documentIdBusinessAlreadyExists: `La empresa ya existe en nuestros registros.`,
  documentIdBusinessLinesEmpty: `La empresa no tiene giros asociados.`,
  documentIdBusinessServer: `Ha ocurrido un error al validar el RUT. Por favor intente más tarde.`,
  // Password
  passwordRequired: `La contraseña es un campo requerido.`,
  passwordLowercase: `La contraseña debe tener al menos una letra minúscula.`,
  passwordUppercase: `La contraseña debe tener al menos una letra mayúscula.`,
  passwordNumber: `La contraseña debe tener al menos un número.`,
  passwordMinLength: `La contraseña debe tener al menos 8 caracteres.`,
  // Password Confirm
  passwordConfirmInvalid: `Las contraseñas no coinciden.`,
  // Email
  emailInvalid: `El correo electrónico ingresado no es válido.`,
  emailAlreadyExists: `El correo electrónico ya existe en nuestros registros.`,
  emailServer: `Ha ocurrido un error al validar el correo electrónico. Por favor intente más tarde.`,
  // Confirm Email
  emailConfirmInvalid: `Los correos electrónicos no coinciden.`,
  // Phone
  phoneRequired: `El teléfono es un campo requerido.`,
  phoneInvalid: `El teléfono ingresado no es válido.`,
  phoneMinLength: `El teléfono debe tener al menos 9 dígitos.`,
  // Search Address
  addressRequired: `La dirección es un campo requerido.`,
  addressInvalid: `La dirección ingresada no es válida.`,
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors,
});
