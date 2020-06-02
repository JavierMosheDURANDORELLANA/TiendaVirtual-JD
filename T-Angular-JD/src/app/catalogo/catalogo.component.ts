import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
// import { products } from '../products';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  // products = products;
  productos: any[] = [];

  // Se inyecto servicio ProductosService en el constructor.
  constructor(private servicio: ProductosService) {
    this.productos = servicio.obtenerProductos();
  }

  ngOnInit(): void {}
}
