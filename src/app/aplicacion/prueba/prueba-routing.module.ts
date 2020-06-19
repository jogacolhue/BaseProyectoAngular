import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaComponent } from './prueba.component';
import { AdiosComponent } from './adios/adios.component';
import { HolaComponent } from './hola/hola.component';
import { Pagina404pruebaComponent } from './pagina404prueba/pagina404prueba.component';

const routes: Routes = [{
  path: '', component: PruebaComponent, children: [
    { path: 'adios', component: AdiosComponent },
    { path: 'hola', component: HolaComponent },
    { path: '', redirectTo: 'hola', pathMatch: 'full' },
    { path: '**', component: Pagina404pruebaComponent }]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaRoutingModule { }
