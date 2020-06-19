import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AutorizadorRoutingModule } from './autorizador-routing.module';
import { AutorizadorComponent } from './autorizador.component';
import { LoginComponent } from './login/login.component';
import { Pagina404autorizadorComponent } from './pagina404autorizador/pagina404autorizador.component';


@NgModule({
  declarations: [
    AutorizadorComponent,
    Pagina404autorizadorComponent,
    LoginComponent],
  imports: [
    CommonModule,
    AutorizadorRoutingModule,
    ReactiveFormsModule
  ]
})
export class AutorizadorModule { }
