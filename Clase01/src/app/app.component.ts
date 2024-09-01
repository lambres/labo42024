import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from './componentes/mi-componente/mi-componente.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MiComponenteComponent, FormsModule, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Mi texto titulo';
  edad: number;
  numero1: number;
  numero2: number;
  
  suma: number;
  items = ['item1', 'item2', 'item3'];
  variable: boolean = true;
  items2 = [
    {id: 1, name: 'item1'},
    {id: 2, name: 'item2'},
    {id: 3, name: 'item3'}

  ]
  constructor() {
    this.edad = 25;
    this.numero1 = 0;
    this.numero2 = 0;
    this.suma = 0;
  }
  sumar(): number {
    return this.numero1 + this.numero2;
  }
  sumar2() {
    this.suma = this.numero1 + this.numero2;
  }

  borrar() {
    this.items.splice(0, 1);
  }

  borrar2() {
    this.items2[1].name = 'borrado';
  }
}
