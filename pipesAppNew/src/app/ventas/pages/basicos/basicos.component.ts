import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrl: './basicos.component.css'
})
export class BasicosComponent {

  //creamos 3 propiedades
  nombreLower: string = "David";
  nombreUpper: string = "DAVID";
  nombreCompleto: string = "DaviD PAredeS Rodríguez";

  //Propiedad fecha
  fecha: Date = new Date(); //dia de hoy

}
