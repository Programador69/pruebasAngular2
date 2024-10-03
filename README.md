# Semana2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Los formularios Template driven

Usando el `Template driven` me resulto mas dificil entender como se tiene que realizar la llamada de los datos al hacer un submit
pero investigando fuera de la documentacion pude ver un video que me ayudo a manejarlo sin problema.

Una vez importado el modulo, solo tenemos que añadirle una variable temporal al formualrio y un evento `ngSubmit` al cual le pasaremos el metodo declarado en la clase del componente en donde estemos trabajando y nosotros en este caso le pasamos los valores del formulario de esta manera:

#formularioInicio="ngForm" ---> variable temporal
(ngSubmit)="mandarDatos(formularioInicio.value)" ---> al suceder el evento, manda los valores al metodo mandarDatos

<form id="formulario" #formularioInicio="ngForm" (ngSubmit)="mandarDatos(formularioInicio.value)" >

En la llamada `HTTP` fue muy sencillo, ya que solo es importar el modulo y nosotros al ya tener los datos recibidos en la funcion, solamente era cuestion de mandarlos a nuestra API

mandarDatos(valores: object) {
    this.http.post("http://localhost:1234/template", valores)
    .subscribe(res => {
      console.log("Respuesta: ", res);
    }), (error: Error) => {
      console.error("Algo salio mal: ", error)
    }
  }

## Los formularios Reactivos

El formualrio `Reactivo` se me hizo mas facil de implementar ya que venia mejor detallado en la documentación. 

Importamos su modulo y ademas debemos que importar un FormGroup y un FormControl; esto porque con ellos podremos manejar los datos del formulario, primero crearemos un `FormGroup` y despues dentro un `FormControl` por cada input que deseemos controlar desde ahi. Estos no se importan dentro del componente.

Estos 2 van dentro de la clase del componente

Le pondremos un valor cualquiera (de preferencia que vaya acorde a nuestro formualrio) y dentro le seguira la siguiente sintaxis:
---
profileForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  })
---

Ya con eso tenemos todo listo para dentro del HTML poder conectar cada input con su respectico FormControl declarado arriba.

En este caso en el input del nombre del usuario, asi que ira en el FormControl `name`
<input type="text" placeholder="Ingresa tu usuario" required id="usuarioReactivo" formControlName="name" />

Dentro de la etiqueta formualrio, debemos que declarar el nombre del FormGroup al que pertenece y tambien el metodo que se ejecutara cuando ocurra un evento ngSubmit.

<form id="formularioReactivo" [formGroup]="profileForm" (ngSubmit)="mandarDatos()" >

Cabe destacar que en este caso no le envio los datos porque ya los tenemos directamente en las variables declaradas desde un principio (es decir, dentro del profileForm).

En la llamada `HTTP` fue muy sencillo, ya que solo es importar el modulo y nosotros al ya tener cada dato guardado en una variable, solamente era cuestion de crear un objeto y mandarlos a nuestra API

mandarDatos() {
    this.http.post("http://localhost:1234/reactivo", this.profileForm.value)
    .subscribe(res => {
      console.log("Respuesta: ", res);
    }), (error: Error) => {
      console.error("Algo salio mal: ", error)
    }
  }

## Configuracion de HTTPClient

Esta fue sencilla ya que a pesar de que HttpClientModule esta deprecado, en la salida del mensaje me decia como sustituirlo, asi que ahora queda de la siguiente manera dentro del app.config.ts

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
provideHttpClient(withInterceptorsFromDi()) ---> Este va dentro de los providers