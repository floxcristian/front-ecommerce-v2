// Angular
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
// Environment
import { environment } from '@env/environment';
import { map } from 'rxjs';

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
    return this.http.get<any[]>(`${API_LOGISTIC}/cities`).pipe(
      map((values) =>
        values
          .map((item) => ({
            ...item,
            id: `${item.city}@${item.provinceCode}@${item.regionCode}`,
          }))
          .sort((a, b) => a.city.localeCompare(b.city))
      )
    );
  }
}
