import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarseComponent } from './autenticacion/registrarse/registrarse.component';
import { IniciarSesionComponent } from './autenticacion/iniciar-sesion/iniciar-sesion.component';
import { RecuperarComponent } from './autenticacion/recuperar/recuperar.component';
import { NotificarComponent } from './usuario/notificar/notificar.component';
import { ListarComponent } from './usuario/listar/listar.component';
import { PersonalComponent } from './administrador/personal/personal.component';
import { EventosComponent } from './administrador/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarseComponent,
    IniciarSesionComponent,
    RecuperarComponent,
    NotificarComponent,
    ListarComponent,
    PersonalComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
