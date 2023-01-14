import { Component, OnInit } from '@angular/core';
import { ServPortfService } from 'src/app/Servicios_Portafolio/serv-portf.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  habilidades:any;
  constructor(private datosPorfolio:ServPortfService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(portfolio=>this.habilidades=portfolio.habilidades
    )
  }

}
