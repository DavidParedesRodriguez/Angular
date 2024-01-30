import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = "yjGnI6lLOf3jlz2EP6aiMulk5q4r3A2I";
  private _historial: string[] = []



  public resultados: Gif[] = [];
  get historial(){
    return[...this._historial];
  }

  constructor(private http: HttpClient){} //Con este http ya puedo hacer peticiones

  buscarGifs(query:string){
    // Verificar si el query ya está en el historial
    if (!this._historial.includes(query)) {
      // Si no está, agregarlo al principio del historial
      this._historial.unshift(query);
      // Limitar el historial a los últimos 10 elementos
      this._historial = this._historial.slice(0, 10);
      //console.log(this._historial);
    }

    this.http.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=yjGnI6lLOf3jlz2EP6aiMulk5q4r3A2I&q=${ query }&limit=10`)
    .subscribe((resp) => {
      console.log(resp.data);
      this.resultados = resp.data;
    })

/*
    fetch("https://api.giphy.com/v1/gifs/search?api_key=yjGnI6lLOf3jlz2EP6aiMulk5q4r3A2I&q=dragon ball z&limit=10")
    .then(resp =>{
      resp.json().then(data => {
        console.log(data); //lo pasamos a JSON
      })
    })*/
  }
}
