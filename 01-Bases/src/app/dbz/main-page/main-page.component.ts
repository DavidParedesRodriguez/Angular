import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

 public titulo : String = "Dragon Ball Z";

 //Ejercicio #11 Diseño página inicial 
 public personajes : String = "Personajes";
 public tituloPersonaje : String = "Agregar nuevo Personajes";

 nuevoPersonaje: any = {};
  listaPersonajes: any[] = [];

  agregarPersonaje() {
    if (this.nuevoPersonaje.nombre && this.nuevoPersonaje.poder) {
      this.listaPersonajes.push({ ...this.nuevoPersonaje });
      // Limpiar los campos después de agregar el personaje
      this.nuevoPersonaje = { nombre: '', poder: '' };
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
