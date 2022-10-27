import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  private makeParams(params: {[key: string]: any} = {}) {
    let httpParams = new HttpParams()

    for (let key in params) {
      httpParams = httpParams.append(key, params[key])
    }

    return httpParams
  }

  public get<T>(url: string, params = {}): Observable<T> {
    return this.handleError(this.http.get<T>(url, {params: this.makeParams(params)}))
  }

  public getById<T>(url: string, id: string | number): Observable<T> {
    return this.handleError(this.http.get<T>(`${url}/${id}`))
  }

  public put<T>(url: string, id: string | number, body: T): Observable<T> {
    return this.handleError(this.http.put<T>(`${url}/${id}`, body))
  }

  public patch<T>(url: string, id: string | number, body: T): Observable<T> {
    return this.handleError(this.http.patch<T>(`${url}/${id}`, body))
  }

  public delete<T>(url: string, id: string | number): Observable<T> {
    return this.handleError(this.http.delete<T>(`${url}/${id}`))
      
  }

  private handleError<T>(obs: Observable<T>) {
    return obs.pipe(
      catchError((err: HttpErrorResponse) => throwError(() => {throw err}))
    )
  }
}
