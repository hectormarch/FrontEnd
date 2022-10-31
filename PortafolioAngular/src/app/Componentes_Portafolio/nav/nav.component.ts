import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  name:any="Hector Araujo";
  title:any="Full Stack Develpoer Jr"
  description:any="Electrical Engineer with knowledge in FrontEnd(Angular, Javascript, TypeScript) y BackEnd (MySQL, JAVA, Spring Boot)"


  eraseDescrption(){

  }

  // Eliminar nombre, titulo y abrir nuevos inputs!
  newName(){

    let nombres=document.getElementById('nombre');
    nombres?.classList.add('d-none');

    const titulo=document.getElementById('titulo');
    titulo?.classList.add('d-none');

    const formul=document.getElementById('formul');
    formul?.classList.remove('d-none');

    const formul_titulo=document.getElementById('formul_list');
    formul_titulo?.classList.remove('d-none');

  }



  cargar_nomres:any=document.getElementById('cargar_nombres');

  // Envio de información nueva nombre y titulo

  onSubmit(){

    this.name=document.getElementById("newName")?.nodeValue
    console.log(this.name)
    
    const formul=document.getElementById('formul');
    formul?.classList.add('d-none');

    const formul_titulo=document.getElementById('formul_list');
    formul_titulo?.classList.add('d-none');

    let nombres=document.getElementById('nombre');
    nombres?.classList.remove('d-none');

    let titulo=document.getElementById('titulo');
    titulo?.classList.remove('d-none');

  }


  constructor() { }

  ngOnInit(): void {
  }

}
