// Angular
import { InjectionToken } from '@angular/core';
// Types
import { ErrorsMap } from './types';
// Environment
import { environment } from '@env/environment';
import { Password } from 'primeng/password';

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
  passwordLowercase: `La contraseña debe tener al menos una letra minúscula.`,
  passwordUppercase: `La contraseña debe tener al menos una letra mayúscula.`,
  passwordNumber: `La contraseña debe tener al menos un número.`,
  passwordMinLength: `La contraseña debe tener al menos 8 caracteres.`,
  // Password Confirm
  passwordConfirmInvalid: `Las contraseñas no coinciden.`,
  // Email
  emailInvalid: `El correo electrónico ingresado no es válido.`,
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
