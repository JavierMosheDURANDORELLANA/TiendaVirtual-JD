import { Component, OnInit } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  products = products;
  constructor() {}

  ngOnInit(): void {}
}
