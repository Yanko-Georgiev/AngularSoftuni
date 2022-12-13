import { Inject, Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_ERROR } from './constants';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
    @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>,
    private router: Router,
    private authService: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({url:request.url ,withCredentials: true})
    return next.handle(request)
  }
}
export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true
};
