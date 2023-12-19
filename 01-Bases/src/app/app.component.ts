import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import internal from 'stream';

@Component({
  //esto es lo que se llama decorador
  selector: 'app-root', //será la aplicación principal. Si nos vamos al index.html podemos ver el componente, pasando antes por otros procesos.
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // title = 'bases'; //nombre del proyecto

  //cambia en la clase AppComponent el nombre del título a "contador App"
  titulo: string = 'contador app';

  contador = 0;

  

  incrementar() {
    this.contador++;
  }

  decrementar() {
    this.contador--;
  }

  modificarContador(valor: number) {
    this.contador += valor;
  }


  //ejercicio #3 Contador3

  baseTipoNumerico: number = 5;
  base : number = 5;

  sumarNumerico(valor: number) {
    this.baseTipoNumerico += valor;
  }

  restarNumerico(valor: number) {
    this.baseTipoNumerico -= valor;
  }
}
