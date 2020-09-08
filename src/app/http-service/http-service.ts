import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public constructor(private readonly _http: HttpClient) { }

  public getRequest(url: string): Observable<unknown> {
    return this._http.get(url);
  }
}
