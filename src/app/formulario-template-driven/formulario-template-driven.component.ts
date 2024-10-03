import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-template-driven',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-template-driven.component.html',
  styleUrl: './formulario-template-driven.component.css'
})

export class FormularioTemplateDrivenComponent {
  http = inject(HttpClient);

  mandarDatos(valores: object) {
    this.http.post("http://localhost:1234/template", valores)
    .subscribe(res => {
      console.log("Respuesta: ", res);
    }), (error: Error) => {
      console.error("Algo salio mal: ", error)
    }
  }

}
