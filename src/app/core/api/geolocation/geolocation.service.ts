// Angular
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// Environment
import { environment } from '@env/environment';

const API_LOGISTIC = `${environment.apiEcommerce}/api/v1/logistic`;

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private readonly http = inject(HttpClient);

  getStores() {
    return this.http.get(`${API_LOGISTIC}/stores`);
  }

  /**
   * Obtener comunas.
   * @returns
   */
  getCommunes() {
    return this.http.get<any[]>(`${API_LOGISTIC}/cities`);
  }
}
