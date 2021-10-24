import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  // servicio global, no hace falta mencionarlo en los providers 
  // del módulo
  providedIn: 'root'
})


export class GifsService {

  private apiKey: string = 'p4RhQCi7pSyi372hAXdAawRxToF05bxb';
  private servicioUrl: string = 'http://api.giphy.com/v1/gifs'
  public resultados: Gif[] = [];

  // Guarda el historial
  private _historial: string[] = [];

  // Muestra el historial
  get historial() {
    return [...this._historial];
  }

  // agregamos una búsqueda en el historial (arreglo)
  buscargifs(query: string) {

    query = query.trim().toLowerCase();

    // Evitar repetidos
    if (!this._historial.includes(query)) {

      this._historial.unshift(query);
      //  Solo obtenemos 10 registros
      this._historial = this._historial.splice(0, 10);

      // Guardar historial en el localstorage
      localStorage.setItem('historial', JSON.stringify(this.historial));
    }
   

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query);
     

    // Petición HTTP
    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params })
      .subscribe((resp) => {
        //console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify( this.resultados ));
      })
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    /* if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!) 
    } */
   }
}
