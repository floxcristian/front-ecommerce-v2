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

  static getValidCharacters(documentId: string): string {
    if (!documentId) return '';
    return documentId.replace(/[^0-9\K\k]/g, '');
  }

  static getFormattedDocumentId(documentId: string): string {
    if (!documentId) return '';
    const numbers = documentId.substring(0, documentId.length - 1);
    const checksum = documentId.substring(documentId.length - 1);
    return `${numbers}-${checksum}`;
  }
}
