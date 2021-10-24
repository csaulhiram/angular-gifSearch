import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Images } from '../interface/gifs.interface';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent   {

  get resultados(){
   
    return this.gifsService.resultados;
  }



  constructor( private gifsService: GifsService){ }


}
