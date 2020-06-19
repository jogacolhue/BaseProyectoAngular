import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicacionComponent } from './aplicacion.component';
import { Pagina404aplicacionComponent } from './pagina404aplicacion/pagina404aplicacion.component';

const routes: Routes = [
  {
    path: '', component: AplicacionComponent, children: [
      { path: 'prueba', loadChildren: () => import(`./prueba/prueba.module`).then(m => m.PruebaModule) },
      { path: '', redirectTo: 'prueba', pathMatch: 'full' },
      { path: '**', component: Pagina404aplicacionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacionRoutingModule { }
