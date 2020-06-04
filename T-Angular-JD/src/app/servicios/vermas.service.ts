import { Injectable } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { ProductosService } from '../servicios/productos.service';
@Injectable({
  providedIn: 'root',
})
export class VermasService {
  productos: any[] = [];

  constructor() {
    console.log('Servicio ver mas funcionando');
  }
  prodselect() {
    return CatalogoComponent.call(this.productos);
  }
}
