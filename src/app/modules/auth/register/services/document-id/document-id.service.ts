import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentIdService {
  constructor() {}

  /**
   * Dejar solo el número de documento editable quitando los caracteres especiales.
   * @param documentId
   * @returns
   */
  static getEditableValue(documentId: string): string {
    if (!documentId) return '';
    return documentId.replace(/\D/g, '');
  }

  /**
   * Obtener solo los caracteres válidos de un RUT.
   * @param documentId
   * @returns
   */
  static getValidCharacters(documentId: string): string {
    if (!documentId) return '';
    if (documentId.length > 9) {
      documentId = documentId.substring(0, 9);
    }
    return documentId.replace(/[^0-9\K\k]/g, '');
  }

  /**
   * Obtener el RUT con formato de puntos y guión.
   * @param documentId
   * @returns
   */
  static getFormattedDocumentId(documentId: string): string {
    if (!documentId) return '';
    const numbers = documentId.substring(0, documentId.length - 1);
    const checksum = documentId.substring(documentId.length - 1);
    return `${numbers}-${checksum}`;
  }
}
