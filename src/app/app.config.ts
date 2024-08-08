import {
  ApplicationConfig,
  provideZoneChangeDetection,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import { environment } from '@env/environment';

if (environment.country === 'CL') {
  import('@angular/common/locales/es-CL').then((module) => {
    registerLocaleData(module.default, environment.localeId);
  });
} else if (environment.country === 'PE') {
  import('@angular/common/locales/es-PE').then((module) => {
    registerLocaleData(module.default, environment.localeId);
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ),
    provideAnimationsAsync(),
    provideClientHydration(),
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: environment.currencyCode,
    },
    {
      provide: LOCALE_ID,
      useValue: environment.localeId,
    },
  ],
};

// provideZoneChangeDetection??
