import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador.component';
import { heroeComponent } from './heroes/heroe/heroe.component';
import { ListaComponent } from './heroes/lista/lista.component';
import { ContadoresNuevoComponent } from './contadores-nuevo/contadores-nuevo.component';
import { MainPageComponent } from './dbz/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContadorComponent, heroeComponent, ListaComponent, ContadoresNuevoComponent, MainPageComponent],
  templateUrl: './app.component.html',
 // templateUrl: './heroes/heroe/heroe.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // ejercicio 1
  title = 'bases';
  

  //suma y resta numeros
  num: number = 1;
  resultado: number = 10;
  sumar(): void {
    this.resultado =  this.resultado + this.num;
  }
  restar(): void {
    this.resultado =  this.resultado - this.num;
  }

  //suma resta 5
  num5: number = 5;
  resultadocinco: number = 0;
  sumarcinco(): void {
    this.resultadocinco =  this.resultadocinco + this.num5;
  }
  restarcinco(): void {
    this.resultadocinco =  this.resultadocinco - this.num5;
  }
  
}