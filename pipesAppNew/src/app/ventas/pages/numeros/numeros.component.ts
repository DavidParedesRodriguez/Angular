import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrl: './numeros.component.css'
})
export class NumerosComponent {

  //creamos dos propiedades
  ventasNetas: number = 2000000.5678;
  porcentaje: number = 0.48;
}
