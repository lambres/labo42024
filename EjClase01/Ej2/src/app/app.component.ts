import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BienvenidoComponent, LoginComponent, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ej2';
}
