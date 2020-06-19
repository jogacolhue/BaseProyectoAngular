# BaseProyectoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Angular Routing:
https://www.freakyjolly.com/angular-nested-routing-with-multiple-routeroutlet-using-loadchildren-having-own-router-modules-example-application/

Resumido:

Con el proyecto en blanco:
    ng g c aplicacion --skipTests=true
    ng g c autorizador --skipTests=true  
    ng g c pagina404 --skipTests=true
    ng g c autorizador/login --skipTests=true
    ng g c autorizador/pagina404autorizador --skipTests=true
    ng g c aplicacion/prueba --skipTests=true
    ng g c aplicacion/pagina404aplicacion --skipTests=true  
    ng g c aplicacion/prueba/hola --skipTests=true
    ng g c aplicacion/prueba/adios --skipTests=true
    ng g c aplicacion/prueba/pagina404prueba --skipTests=true
    ng g m autorizador --routing   
    ng g m aplicacion --routing 
    ng g m aplicacion/prueba --routing
   
   
Bootstrap:
    ng add @ng-bootstrap/ng-bootstrap