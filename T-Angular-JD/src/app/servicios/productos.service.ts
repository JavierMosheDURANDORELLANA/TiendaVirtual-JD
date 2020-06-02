import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  productos: any[] = [
    {
      imagen: './assets/img/palta.jpg',
      nombre: 'Palta',
      precio: 3,
      cantidad: 10,
      descripcion:
        'La palta tiene potasio y es fuente de energía y de grasas saludables. Su contenido en magnesio favorece al funcionamiento del sistema nervioso y muscular, así como a regular los niveles de glucosa en la sangre. También es importante para dar soporte al sistema inmunológico.',
    },
    {
      imagen: './assets/img/ajo.jpg',
      nombre: 'Ajo',
      precio: 2,
      cantidad: 10,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/papa.jpg',
      nombre: 'Papa',
      precio: 4,
      cantidad: 5,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/zanahoria.jpg',
      nombre: 'Zanahoria',
      precio: 2,
      cantidad: 9,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/almendras.jpg',
      nombre: 'Almendras',
      precio: 4,
      cantidad: 8,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/arandanos.jpg',
      nombre: 'Arandanos',
      precio: 2,
      cantidad: 15,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/cebolla.jpg',
      nombre: 'Cebolla',
      precio: 6,
      cantidad: 25,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/calabaza.jpg',
      nombre: 'Calabaza',
      precio: 4,
      cantidad: 11,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/canela.jpg',
      nombre: 'Canela',
      precio: 3,
      cantidad: 20,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/fresa.jpg',
      nombre: 'Fresa',
      precio: 4,
      cantidad: 17,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/kiwi.jpg',
      nombre: 'Kiwi',
      precio: 2,
      cantidad: 15,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/maiz.jpg',
      nombre: 'Maíz',
      precio: 8,
      cantidad: 35,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/manzana.jpg',
      nombre: 'Manzana',
      precio: 2,
      cantidad: 19,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/naranja.jpg',
      nombre: 'Naranja',
      precio: 8,
      cantidad: 5,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/pasta.jpg',
      nombre: 'Pasta',
      precio: 4,
      cantidad: 25,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/pimienta.jpg',
      nombre: 'pimienta',
      precio: 1,
      cantidad: 40,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/brocoli.jpg',
      nombre: 'Brocoli',
      precio: 5,
      cantidad: 10,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/tomate.jpg',
      nombre: 'Tomate',
      precio: 2,
      cantidad: 13,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/repollo.jpg',
      nombre: 'Repollo',
      precio: 4,
      cantidad: 5,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/lychee.jpg',
      nombre: 'Lychee',
      precio: 2,
      cantidad: 8,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/limon.jpg',
      nombre: 'Limón',
      precio: 3,
      cantidad: 55,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/uva.jpg',
      nombre: 'Uva',
      precio: 4,
      cantidad: 13,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/carne.jpg',
      nombre: 'Carne',
      precio: 4,
      cantidad: 5,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/melon.jpg',
      nombre: 'Melón',
      precio: 9,
      cantidad: 11,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/sandilla.jpg',
      nombre: 'Sandilla',
      precio: 4,
      cantidad: 18,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/platano.jpg',
      nombre: 'Plátano',
      precio: 2,
      cantidad: 27,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/mango.jpg',
      nombre: 'Mango',
      precio: 3,
      cantidad: 21,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
    {
      imagen: './assets/img/camote.jpg',
      nombre: 'Camote',
      precio: 5,
      cantidad: 23,
      descripcion:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sed eligendi accusamus, assumenda distinctio porro iure dignissimos! Tempora dolor nulla odit, atque, placeat dolore necessitatibus fugiat velit alias, eligendi culpa.',
    },
  ];

  constructor() {
    console.log('Servicio funcionado');
  }
  obtenerProductos() {
    return this.productos;
  }
}
