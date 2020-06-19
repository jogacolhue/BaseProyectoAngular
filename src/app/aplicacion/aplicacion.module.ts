import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AplicacionRoutingModule } from './aplicacion-routing.module';
import { AplicacionComponent } from './aplicacion.component';
import { Pagina404aplicacionComponent } from './pagina404aplicacion/pagina404aplicacion.component';


@NgModule({
  declarations: [
    AplicacionComponent,
    Pagina404aplicacionComponent],
  imports: [
    CommonModule,
    AplicacionRoutingModule,
    NgbModule
  ]
})
export class AplicacionModule { }
