import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes_Portafolio/header/header.component';
import { NavComponent } from './Componentes_Portafolio/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './Componentes_Portafolio/login-component/login-component.component';
import { ExperienceComponent } from './Componentes_Portafolio/experience/experience.component';
import { EducationComponent } from './Componentes_Portafolio/education/education.component';
import { SkillsComponent } from './Componentes_Portafolio/skills/skills.component';
import { ProyectsComponent } from './Componentes_Portafolio/proyects/proyects.component';
import {HttpClientModule } from '@angular/common/http';
import { NewExperienciaComponent } from './Componentes_Portafolio/new-experiencia/new-experiencia.component';
import { HomeComponent } from './Componentes_Portafolio/home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LoginComponentComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProyectsComponent,
    NewExperienciaComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
