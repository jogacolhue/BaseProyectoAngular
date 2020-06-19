import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaComponent } from './prueba.component';
import { Pagina404pruebaComponent } from './pagina404prueba/pagina404prueba.component';
import { HolaComponent } from './hola/hola.component';
import { AdiosComponent } from './adios/adios.component';


@NgModule({
  declarations: [Pagina404pruebaComponent, HolaComponent, AdiosComponent, PruebaComponent],
  imports: [
    CommonModule,
    PruebaRoutingModule
  ]
})
export class PruebaModule { }
