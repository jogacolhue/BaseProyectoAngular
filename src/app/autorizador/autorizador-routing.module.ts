import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorizadorComponent } from './autorizador.component';
import { LoginComponent } from './login/login.component';
import { Pagina404autorizadorComponent } from './pagina404autorizador/pagina404autorizador.component';

const routes: Routes = [
  {
    path: '', component: AutorizadorComponent, children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: Pagina404autorizadorComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorizadorRoutingModule { }
