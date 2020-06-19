import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AplicacionComponent } from './aplicacion/aplicacion.component';
// import { AutorizadorComponent} from './autorizador/autorizador.component';
import {Pagina404Component} from './pagina404/pagina404.component';

const routes: Routes = [
  { path: 'aplicacion', loadChildren: () => import(`./aplicacion/aplicacion.module`).then(m => m.AplicacionModule) },
  { path: 'autorizador', loadChildren: () => import(`./autorizador/autorizador.module`).then(m => m.AutorizadorModule) },
  { path: '', redirectTo: 'aplicacion', pathMatch: 'full' },
  { path: '**', component: Pagina404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
