// Angular
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// Rxjs
import { Observable } from 'rxjs';
// Environment
import { environment } from '@env/environment';

const API_CUSTOMER = `${environment.apiEcommerce}/api/v1/customer`;

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private readonly http = inject(HttpClient);
  constructor() {}

  createUser(params: any): Observable<void> {
    const body = {
      documentId: '',
      documentType: '',
      userType: '',
      customerType: '',
      businessLine: '',
      businessLineName: '',
      email: '',
      firstName: '',
      lastName: '',
    };
    console.log('body: ', body);
    return this.http.post<void>(`${API_CUSTOMER}/new`, body);
  }
}
