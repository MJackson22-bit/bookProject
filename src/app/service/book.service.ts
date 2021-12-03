import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from '../models/book';
import { Veterinaria } from '../models/veterianaria';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  vetUrl = "https://localhost:5001/apivet";
  constructor(private http: HttpClient) {

  }
  getVets(){
    return this.http.get<Veterinaria[]>(this.vetUrl);
  }
  getVet(id: string){
    return this.http.get<Veterinaria[]>(this.vetUrl + "/" + id);
  }
}
