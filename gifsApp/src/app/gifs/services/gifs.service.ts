import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'yjGnI6lLOf3jlz2EP6aiMulk5q4r3A2I';
  private servicioUrl : string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('historial')
    ) {
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }

    // Cargar resultados desde localStorage al iniciar el servicio
    if (
      typeof localStorage !== 'undefined' &&
      localStorage.getItem('resultados')
    ) {
      this.resultados = JSON.parse(localStorage.getItem('resultados')!);
    }
  }

  buscarGifs(query: string) {
    // Verificar si el query ya está en el historial
    if (!this._historial.includes(query)) {
      // Si no está, agregarlo al principio del historial
      this._historial.unshift(query);
      // Limitar el historial a los últimos 10 elementos
      this._historial = this._historial.splice(0, 10);
      //console.log(this._historial);

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('historial', JSON.stringify(this._historial));
      }
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    console.log(params.toString());

    //yjGnI6lLOf3jlz2EP6aiMulk5q4r3A2I
    this.http.get<SearchGIFResponse>(`${this.servicioUrl}/search`,{ params})
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;

        // Guardar resultados en localStorage
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('resultados', JSON.stringify(this.resultados));
        }
      });

    /*
    fetch("https://api.giphy.com/v1/gifs/search?api_key=yjGnI6lLOf3jlz2EP6aiMulk5q4r3A2I&q=dragon ball z&limit=10")
    .then(resp =>{
      resp.json().then(data => {
        console.log(data); //lo pasamos a JSON
      })
    })*/
  }
}
