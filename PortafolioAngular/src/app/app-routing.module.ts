import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componentes_Portafolio/home/home.component';
import { LoginComponentComponent } from './Componentes_Portafolio/login-component/login-component.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
