import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServPortfService } from 'src/app/Servicios_Portafolio/serv-portf.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  head:any;
  constructor(private datosPortfolio:ServPortfService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(portfolio=>
      this.head=portfolio)
  }

}
