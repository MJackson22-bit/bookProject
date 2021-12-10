import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Book } from '../models/book';
import { Veterinaria } from '../models/veterianaria';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-toke',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BookService {
  vetUrl = 'https://localhost:5001/apivet';
  constructor(private http: HttpClient) {}
  getVets() {
    return this.http
      .get<Veterinaria[]>(this.vetUrl)
      .pipe(retry(3), catchError(this.HandleError));
  }

  getVet(id: number) {
    const url = `${this.vetUrl}/${id}`;
    return this.http
      .get<Veterinaria>(url)
      .pipe(retry(3), catchError(this.HandleError));
  }

  findVets(nombre: string) {
    const url = `${this.vetUrl}/findnombre/${nombre}`;
    return this.http
      .get<Veterinaria[]>(url)
      .pipe(retry(3), catchError(this.HandleError));
  }

  addVet(veterianaria: Veterinaria): Observable<number> {
    return this.http
      .post<number>(this.vetUrl, veterianaria, httpOptions)
      .pipe(catchError(this.HandleError));
  }

  deleteVet(id: number): Observable<any> {
    const url = `${this.vetUrl}/${id}`;
    //console.log('deleteVet', url);
    return this.http
      .delete(url)
      .pipe(catchError(this.HandleError));
  }

  updateVet(veterianaria?: Veterinaria, id?: number): Observable<number> {
    const url = `${this.vetUrl}/${id}`;
    console.log('updateVet', url);
    return this.http.put<number>(url, veterianaria).pipe(catchError(this.HandleError));
  }

  private HandleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Ha ocurrido un error: ', error.error);
    } else {
      console.error(
        'El código ha retornado ${error.status}, en resumen fue: ',
        error.error
      );
    }
    return throwError('Algo ha ocurrido; por favor inténtelo después');
  }
}
