import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
interface OrderItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule]
})
export class CarritoPage implements OnInit {
  orderItems: OrderItem[] = [
    { name: 'Curso Python', image: 'assets/img/web.png', price: 10.0, quantity: 1 },
    { name: 'Curso HTML', image: 'assets/img/web.png', price: 10.0, quantity: 1 },
    { name: 'Curso css', image: 'assets/img/web.png', price: 10.0, quantity: 1 },
  ];

  constructor() { }

  ngOnInit() {}

  get totalAmount(): number {
    return this.orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  incrementQuantity(item: OrderItem) {
    item.quantity++;
  }

  decrementQuantity(item: OrderItem) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  placeOrder() {
    console.log('Order placed:', this.orderItems);
    // Add further order placement logic here
  }
}
