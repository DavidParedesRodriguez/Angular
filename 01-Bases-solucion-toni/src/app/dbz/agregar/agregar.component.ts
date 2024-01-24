import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()personaje:Personaje[] = [];
  
  @Input()nuevo: Personaje = { // creamos un nuevo objeto
    nombre: "", 
    poder: 0
    }
 
  agregar(){
    if (this.nuevo.nombre.trim().length === 0) {return;}
    console.log(this.nuevo)
    // Insertamos en el array
    this.personaje.push(this.nuevo);
    this.nuevo = {
      nombre: "",
      poder: 0
    }
  }

}
