import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationMessageService {
  validationErrors: any[] = [];
  constructor() {}

  getValidationMsg(validationId: string): string {
    //return this.validationErrors[validationId];
    return '';
  }
}
