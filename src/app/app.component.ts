import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
  input = '';
  canasta = ['Fresa', 'Banano', 'cerveza', 'Mango'];
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'Camiseta la descripción del producto'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 60000,
      description: 'Hoodie o buso la descripción del producto'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 20000,
      description: 'Posillo la descripción del producto'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pines',
      price: 5000,
      description: 'Pines la descripción del producto'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers Opc 1',
      price: 2500,
      description: 'Stickers OPC 1 la descripción del producto'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers Opc 2',
      price: 2500,
      description: 'Stickers OPC 2 la descripción del producto'
    },
  ];
  addItem(){
    this.canasta.push(this.input);
  }
  deleteItem(index: number){
    this.canasta.splice(index, 1);
  }
  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }
}
