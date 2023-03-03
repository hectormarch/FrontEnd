import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../Entity/Experiencia';


@Injectable({
  providedIn: 'root'
})
export class ServPortfService {

  private apiUrl = 'http://localhost:8081/persona/experiencias';

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/miportfolio/portfolio.json');

  }

  getUsers(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl);
  }

}
