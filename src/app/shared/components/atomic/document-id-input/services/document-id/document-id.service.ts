import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocumentIdService {
  /**
   * Dejar solo el número de documento editable quitando los caracteres especiales.
   * @param documentId
   * @returns
   */
  static getEditableValue(documentId: string): string {
    if (!documentId) return '';
    return documentId.replace(/[^0-9\K\k]/g, '');
  }

  /**
   * Obtener solo los caracteres válidos de un RUT.
   * @param documentId
   * @returns
   */
  static getValidCharacters(documentId: string): string {
    if (!documentId) return '';

    /*
    if (documentId.length > 9) {
      documentId = documentId.substring(0, 9);
    }*/
    const cleanedValue = documentId.replace(/[^0-9\K\k]/g, '').toUpperCase();
    if (cleanedValue.length < 2) return cleanedValue;
    //console.log('[1]: ', cleanedValue);
    // Insertar el guión en la penúltima posición
    let formattedValue =
      cleanedValue.slice(0, -1) + '-' + cleanedValue.slice(-1);
    //console.log('[2]: ', formattedValue);
    // Añadir puntos según el formato chileno
    if (formattedValue.length > 5) {
      formattedValue =
        formattedValue.slice(0, -5) + '.' + formattedValue.slice(-5);
    }
    if (formattedValue.length > 9) {
      formattedValue =
        formattedValue.slice(0, -9) + '.' + formattedValue.slice(-9);
    }
    if (formattedValue.length > 12) {
      formattedValue =
        formattedValue.slice(0, -12) + '.' + formattedValue.slice(-12);
    }

    return formattedValue;
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

  static getDocumentIdWithoutFormat(documentId: string): string {
    if (!documentId) return '';
    const cleanedValue = documentId.replace(/[^0-9\K\k]/g, '').toUpperCase();
    if (cleanedValue.length < 2) return cleanedValue;
    return cleanedValue.slice(0, -1) + '-' + cleanedValue.slice(-1);
  }
}
