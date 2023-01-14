import { Component, OnInit } from '@angular/core';
import { ServPortfService } from 'src/app/Servicios_Portafolio/serv-portf.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList:any;
  constructor(private datosPortfolio:ServPortfService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(portfolio=>{
      console.log(portfolio.education);
      this.educationList= portfolio.education;
    })
  }

}
