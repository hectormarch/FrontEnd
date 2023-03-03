import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/Entity/Experiencia';
import { ServPortfService } from 'src/app/Servicios_Portafolio/serv-portf.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceList: Experiencia[]=[];

  constructor(private datosPortfolio:ServPortfService) { }

  ngOnInit(): void {
    this.datosPortfolio.getUsers().subscribe(
      experienceList=>this.experienceList=experienceList,
      error=>console.error(error)
    );
    }


  }



