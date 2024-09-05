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
export class ContactService {
  private readonly http = inject(HttpClient);

  getPositions(): Observable<any[]> {
    return this.http.get<any[]>(`${API_CUSTOMER}/contact-positions`);
  }
}
