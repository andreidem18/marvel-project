import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environtment } from 'src/environments/environments';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class SetApikeyInterceptor implements HttpInterceptor {

  constructor() {}

  private apiKey: string = environtment.apiKey;

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKeyReq = req.clone({
      params: (req.params ? req.params : new HttpParams())
                 .set('apikey', this.apiKey),
    })
    return next.handle(apiKeyReq);
  }
}
