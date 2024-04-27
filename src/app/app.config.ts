import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { JwtInterceptor } from '@auth0/angular-jwt/lib/jwt.interceptor';
import { jwtInterceptorInterceptor } from './_service/jwt-interceptor.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),provideHttpClient(withInterceptors([jwtInterceptorInterceptor]))]
};
