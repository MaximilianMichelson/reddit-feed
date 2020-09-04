import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly _http: HttpClient) { }

  public getRequest(url: string): Observable<unknown> {
    return this._http.get(url).pipe(
      catchError(async (e) => this.handleError(e))
    );
  }

  /**
   * Prints HTTP request errors.
   * @param error The error to read status from.
   */
  private handleError(error: any): void {
    if (error.status === 0) {
      console.log('Backend is probably off');
    } else if (error.status === 400) {
      console.log('Bad Request');
    } else if (error.status === 404) {
      console.log('Route not found');
    } else {
      console.log(error);
    }
  }
}
