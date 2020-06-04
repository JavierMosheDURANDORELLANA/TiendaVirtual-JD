import { Component, OnInit } from '@angular/core';
import { VermasService } from '../../servicios/vermas.service';
import { products } from 'src/app/products';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  productos: any[] = [];

  constructor(private servicio: VermasService) {
    this.productos = servicio.prodselect();
  }

  ngOnInit(): void {}
}
