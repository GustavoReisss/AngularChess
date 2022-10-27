import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  storagedCache: Map<string, HttpEvent<any>> = new Map<string, HttpEvent<any>>()

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(this.storagedCache)

    const { method, urlWithParams } = request
    
    let cache = (method === "GET") ? this.storagedCache.get(urlWithParams) : undefined

    return (cache) ? of(cache) : next.handle(request)
      .pipe(
        tap(httpEvent => {
          if(httpEvent instanceof HttpResponse) {
            this.storagedCache.set(urlWithParams, httpEvent)
          }

          return httpEvent
        })
      );
  }
}
