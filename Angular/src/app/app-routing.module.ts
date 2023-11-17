import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './autenticacion/iniciar-sesion/iniciar-sesion.component';
import { RecuperarComponent } from './autenticacion/recuperar/recuperar.component';
import { RegistrarseComponent } from './autenticacion/registrarse/registrarse.component';
import { NotificarComponent } from './usuario/notificar/notificar.component';

const routes: Routes = [
  {path:'ingreso', component: IniciarSesionComponent},
  {path:'', pathMatch:'full', component: IniciarSesionComponent},
  {path:'recuperar', component: RecuperarComponent},
  {path:'registro', component: RegistrarseComponent},
  {path:'usuarionot', component: NotificarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
