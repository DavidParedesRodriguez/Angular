import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

interface Personaje {
  //crreamos una interface
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: "",
    poder: 0,
  };

  agregar() {
    if(this.nuevo.nombre.trim().length === 0){
      return
    }
    console.log(this.nuevo);
  }
  
}
