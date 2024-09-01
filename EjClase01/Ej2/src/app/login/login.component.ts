import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from "../bienvenido/bienvenido.component";
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, BienvenidoComponent, ErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  nombre: string = '';
  contrasenia: string = '';
  valido: boolean = false;
  login() {
    if (this.nombre == 'dario' && this.contrasenia == 'q1w2e3') {
      this.valido = true;
    } else {
      this.valido = false;
    }
  }
}
