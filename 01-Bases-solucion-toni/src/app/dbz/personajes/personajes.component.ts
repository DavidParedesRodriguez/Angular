import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  @Input() personaje:Personaje[] = []; // le decimos que estos personajes van a venir del 
                                  // componente hijo

}
