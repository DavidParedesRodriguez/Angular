import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

interface Personaje {
  //crreamos una interface
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
 
})
export class MainPageComponent {

  
personaje : Personaje[] = [
  {
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre: 'Vegeta',
    poder: 7500
  }
];


nuevo: Personaje = {
  nombre: "Genio Tortuga",
  poder: 1000
}

}
