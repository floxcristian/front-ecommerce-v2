import { AbstractControl } from '@angular/forms';
import { environment } from '../../../../../environments/environment';

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
    let rut = documentId.trim();
    if (!rut) return false;
    if (!rut.includes('-')) {
      rut = rut.slice(0, -1) + '-' + rut.slice(-1);
    }
    const parts = rut.split('-');
    if (parts.length !== 2) return false;
    const numbers = parts[0];
    const checksum = parts[1];
    const validChecksum = DocumentIdValidator.calculateChileanChecksum(numbers);
    return checksum === validChecksum;
  }

  /**
   * Calcula el dígito verificador de un RUT chileno.
   * @param numbers
   * @returns
   */
  private static calculateChileanChecksum(numbers: string): string {
    let sum = 0;
    let multiplier = 2;
    for (let i = numbers.length - 1; i >= 0; i--) {
      sum += parseInt(numbers.charAt(i)) * multiplier;
      multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }

    const expectedCheckDigit = 11 - (sum % 11);
    return expectedCheckDigit === 11
      ? '0'
      : expectedCheckDigit === 10
      ? 'K'
      : expectedCheckDigit.toString();
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
