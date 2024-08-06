import { AbstractControl } from '@angular/forms';
import { environment } from '../../../../environments/environment';

export class DocumentIdValidator {
  static isValidDocumentId(
    control: AbstractControl
  ): Record<string, boolean> | null {
    const value = control.value;
    if (!value) {
      return null;
    }
    if (environment.country === 'CL') {
      const isValid = DocumentIdValidator.isValidChileanDocumentId(value);
      return isValid ? null : { invalidDocumentId: true };
    }
    if (environment.country === 'PE') {
      const isValid = DocumentIdValidator.isValidPeruvianDocumentId(value);
      return isValid ? null : { invalidDocumentId: true };
    }
    return null;
  }

  private static isValidChileanDocumentId(documentId: string): boolean {
    const rut = documentId.trim().toUpperCase();
    if (!rut || rut.length < 9) return false;
    const multiples = [3, 2, 7, 6, 5, 4, 3, 2];
    const dsum = rut
      .substring(0, rut.length - 1)
      .split('')
      .reduce((acc, digit, index) => {
        acc += Number(digit) * multiples[index];
        return acc;
      }, 0);
    const key = 11 - (dsum % 11);
    const index = key === 11 ? 0 : key;
    return rut[rut.length - 1] === index.toString();
  }

  private static isValidPeruvianDocumentId(documentId: string): boolean {
    const dni = documentId.trim();
    if (!dni || dni.length !== 8) return false;
    const numbers = dni.substring(0, 7);
    const checksum = dni.substring(7);
    const validChecksum =
      DocumentIdValidator.calculatePeruvianChecksum(numbers);
    return checksum === validChecksum;
  }

  private static calculatePeruvianChecksum(numbers: string): string {
    const weights = [2, 3, 4, 5, 6, 7, 2];
    const sum = numbers
      .split('')
      .reverse()
      .reduce((acc, digit, index) => {
        acc += Number(digit) * weights[index];
        return acc;
      }, 0);
    const mod = sum % 11;
    const diff = 11 - mod;
    return diff < 10 ? diff.toString() : '0';
  }
}
