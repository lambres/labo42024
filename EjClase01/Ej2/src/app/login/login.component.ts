import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from "../bienvenido/bienvenido.component";
import { ErrorComponent } from '../error/error.component';
import { Usuario } from '../clases/usuario'

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
  usuario: Usuario = new Usuario("dario","q1w2e3")
  login() {
    if (this.nombre == this.usuario.nombre && this.contrasenia == this.usuario.clave) {
      this.valido = true;
    } else {
      this.valido = false;
    }
  }
}
