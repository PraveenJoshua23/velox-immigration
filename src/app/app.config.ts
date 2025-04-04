import {
  APP_INITIALIZER,
  ApplicationConfig,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AnalyticsService } from './services/analytics.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: (analyticsService: AnalyticsService) => () => {
        analyticsService.initialize();
      },
      deps: [AnalyticsService],
      multi: true,
    },
  ],
};
