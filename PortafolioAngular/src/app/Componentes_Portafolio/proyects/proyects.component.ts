import { Component, OnInit } from '@angular/core';
import { ServPortfService } from 'src/app/Servicios_Portafolio/serv-portf.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyectos:any;
  constructor(private datosPortfolio:ServPortfService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(portfolio=>
      this.proyectos=portfolio.proyectos)
  }

}
