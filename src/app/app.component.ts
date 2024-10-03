import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioTemplateDrivenComponent } from './formulario-template-driven/formulario-template-driven.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioTemplateDrivenComponent, FormularioReactivoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
}
