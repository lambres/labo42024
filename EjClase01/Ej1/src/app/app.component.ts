import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ejercicio 1 Clase 1';
  edadUno: number;
  edadDos: number;
  valPromedio: number;
  valSuma: number;
  mostrar: boolean = false;
  constructor() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.valPromedio = 0;
    this.valSuma = 0;
  }

  calcular() {
    this.valPromedio = (this.edadUno + this.edadDos)/2;
    this.valSuma = this.edadUno + this.edadDos;
    this.mostrar = true;
  }
  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.mostrar = false;
  }
}
