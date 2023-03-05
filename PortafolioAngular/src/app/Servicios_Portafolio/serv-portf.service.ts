import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../Entity/Experiencia';


@Injectable({
  providedIn: 'root'
})
export class ServPortfService {

  private apiUrl = 'http://localhost:8081/persona/experiencia';

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    return this.http.get('./assets/miportfolio/portfolio.json');

  }

  getExperiencia(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl);
  }

  saveExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(this.apiUrl+'/agregar', experiencia)
  }

  modificarExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.put<any>(this.apiUrl+'/modificar', experiencia)
  }
  eliminarExperiencia(id:number):Observable<any>{
    return this.http.delete<any>(this.apiUrl+`delete/${id}`);
  }
}
