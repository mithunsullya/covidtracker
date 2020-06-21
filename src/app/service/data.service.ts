import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

   /**
   * @method to perform the http `get` method
   * @param api - name of the service/api to be called
   * @returns the Observable<any>
   */
  getValues(api: any): Observable<any> {
    return this.http
      .get( api)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  handleError(error: any): Observable<any> {
    return throwError(error);
  }
}
