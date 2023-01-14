import { Component, Input, OnInit } from '@angular/core';
import { ServPortfService } from 'src/app/Servicios_Portafolio/serv-portf.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navPrincipal:any;
  onSubmit(){
  }

  constructor(private datosPortfolio:ServPortfService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(portfolio=>
      this.navPrincipal=portfolio)
  }

}
