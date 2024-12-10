// Angular
import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  input,
  output,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
// Environments
import { environment } from '@env/environment';
// PrimeNG
import { SkeletonModule } from 'primeng/skeleton';

const PRIME_MODULES = [SkeletonModule];
const NG_MODULES = [GoogleMapsModule];

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [NG_MODULES, PRIME_MODULES],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent {
  mapDragend = output<google.maps.MapMouseEvent>();
  isMapReady = output<void>();

  isMapLoaded = signal<boolean>(false);
  isPlaceLoaded = signal<boolean>(false);
  isMarkerDraggable = input<boolean>(true);
  markerPositions = signal<google.maps.marker.AdvancedMarkerElement[]>([]);
  options = signal<google.maps.MapOptions>({
    zoom: 4,
    mapId: '473f291830f1a34c',
    center: environment.defaultMapCenter,
  });
  advancedMarkerElement!: typeof google.maps.marker.AdvancedMarkerElement;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    await this.initGooglePlacesService();
    console.log('Google Places Service initialized');
  }

  private async initGooglePlacesService(): Promise<void> {
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker'
    )) as google.maps.MarkerLibrary;
    this.advancedMarkerElement = AdvancedMarkerElement;
    this.isPlaceLoaded.set(true);
    this.onMapReady();
  }

  onMapLoaded(): void {
    console.log('onMapLoaded');
    this.isMapLoaded.set(true);
    this.onMapReady();
  }

  onMapReady(): void {
    if (this.isMapLoaded() && this.isPlaceLoaded()) {
      this.isMapReady.emit();
    }
  }

  /**
   * Setear marcador en el mapa y centrar el mapa en la ubicación del marcador.
   * @param location
   **/
  setMarker(location: google.maps.LatLngLiteral): void {
    console.log('setMarker en [MapComponent]: ', location);
    const marker = new this.advancedMarkerElement({
      position: location,
    });
    this.markerPositions.set([marker]);
    this.options.update((value) => ({
      ...value,
      zoom: 17,
      center: location,
    }));
  }
}
