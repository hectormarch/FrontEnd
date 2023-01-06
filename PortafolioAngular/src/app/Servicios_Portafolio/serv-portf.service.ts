import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServPortfService {

  constructor() { }

  obtenerDatos(){
    console.log("El servicio esta OK")
  }

}
