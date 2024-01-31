import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

constructor(private GifsService: GifsService){}


buscar(termino: string) {
  console.log(termino);

  // Llamar al método buscarGifs del servicio para cargar las imágenes
  this.GifsService.buscarGifs(termino);

  // Aplicar la clase de animación al componente de imágenes (opcional)
  this.aplicarAnimacion();
}


aplicarAnimacion() {
  // Agrega la clase de animación al componente de imágenes
  const imagenesComponent = document.getElementById('imagenes-component');
  imagenesComponent?.classList.add('animate__animated', 'animate__fadeIn');
}

ngOnInit(): void {}

get historial(){
  return this.GifsService.historial;
}


}
