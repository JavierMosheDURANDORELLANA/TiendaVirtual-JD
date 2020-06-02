import { Component, OnInit } from '@angular/core';
import { products } from './../../products';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  products = products;
  constructor() {}

  ngOnInit(): void {}
}
