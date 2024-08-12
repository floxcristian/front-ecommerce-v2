import {
  ApplicationConfig,
  provideZoneChangeDetection,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import { environment } from '@env/environment';
import { provideHttpClient, withFetch } from '@angular/common/http';

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
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      routes,
      withViewTransitions(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      })
    ),
    provideHttpClient(withFetch()),
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
