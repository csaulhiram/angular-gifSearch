import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    // Controlar que no se envíen datos vacíos 
    if( valor.trim().length == 0){
      return;
    }
    this.gifsService.buscargifs( valor );
    this.txtBuscar.nativeElement.value = '';
  }

  constructor(private gifsService: GifsService){}
}
