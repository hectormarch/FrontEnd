import { Component, OnInit } from '@angular/core';
import { ServPortfService } from 'src/app/Servicios_Portafolio/serv-portf.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceList:any;
  constructor(private datosPortfolio:ServPortfService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(portfolio=>
    this.experienceList=portfolio.experience)

  }

}
