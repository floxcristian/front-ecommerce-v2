import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@env/environment';

const API_CUSTOMER = `${environment.apiEcommerce}/api/v1/auth`;

@Injectable({
  providedIn: 'root',
})
export class CheckUserService {
  private readonly http = inject(HttpClient);

  checkEnterpriseUser(documentId: string) {
    return this.http.get(`${API_CUSTOMER}/check-enterprise/${documentId}`);
  }
}
