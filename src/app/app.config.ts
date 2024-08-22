import { ApplicationConfig, provideZoneChangeDetection,} from '@angular/core';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideAuth0} from '@auth0/auth0-angular'


import { LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';




export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), {provide: LOCALE_ID,
    useValue: 'es-ES'}, 
    provideAuth0({
      domain: 'dev-xtpiwdhrhfpatrnu.us.auth0.com',
      clientId: 'LkyuWy3LshYMcY9inyBqAKuCSbOa6ZTK',
      authorizationParams: {
        redirect_uri: 'http://localhost:4200'
      }
    }),
  ]
};
