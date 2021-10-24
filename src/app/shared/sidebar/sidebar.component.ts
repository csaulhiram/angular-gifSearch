import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent   {

  get historial(): string[]{
    return this.gifService.historial;
  }

  buscar( termino:  string){
    this.gifService.buscargifs(termino);
  }

  constructor(private gifService:GifsService){}
}
