import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeolocationStateService {
  stores = signal<any[]>([]);

  setStores(stores: any[]): void {
    this.stores.set(stores);
  }
}
