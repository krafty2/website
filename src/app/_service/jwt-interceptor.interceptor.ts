import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { AuthService } from './auth.service';

const TOKEN_HEADER_KEY = 'Authorization';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  let isRefreshing = false;
  let refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  const authService = inject(AuthService);

  let authReq = req;
  let url = req.url;
  let token = authService.getToken();

  let addTokenHeader = req.clone({
    headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token),
  });

  if (token != null && !url.includes('/public')) {
    authReq = addTokenHeader;
  }

  return next(authReq).pipe(
    catchError((error) => {
      if (
        error.status == 401 &&
        error instanceof HttpErrorResponse &&
        !authReq.url.includes('/public')
      ) {
        authService.clear();
        window.location.href = '/';
      }
      throw 'error in source. Details: ';
    })
  );
};
