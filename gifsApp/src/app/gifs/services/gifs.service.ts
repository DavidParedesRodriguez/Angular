import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = []

  get historial(){
    return[...this._historial];
  }

  buscarGifs(query:string){
    // Verificar si el query ya está en el historial
    if (!this._historial.includes(query)) {
      // Si no está, agregarlo al principio del historial
      this._historial.unshift(query);

      // Limitar el historial a los últimos 10 elementos
      this._historial = this._historial.slice(0, 10);

      console.log(this._historial);
    }
  }


}
