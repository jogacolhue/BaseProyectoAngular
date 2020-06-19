import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AplicacionComponent } from './aplicacion/aplicacion.component';
// import { AutorizadorComponent } from './autorizador/autorizador.component';
import { Pagina404Component } from './pagina404/pagina404.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    // AplicacionComponent,
    // AutorizadorComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
