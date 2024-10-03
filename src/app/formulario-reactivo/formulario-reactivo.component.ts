import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css',
})
export class FormularioReactivoComponent {
  http = inject(HttpClient);

  profileForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  })

  mandarDatos() {
    this.http.post("http://localhost:1234/reactivo", this.profileForm.value)
    .subscribe(res => {
      console.log("Respuesta: ", res);
    }), (error: Error) => {
      console.error("Algo salio mal: ", error)
    }
  }
}
