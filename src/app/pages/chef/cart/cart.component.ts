import { Component, Input } from '@angular/core';

interface Product {
  name: string;
  description: string;
  imageUrl: string;
  quantity: number;
  price: number;
  cost: number;
}

type CartItem = {
  product: Product;
  quantity: number;
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() cartItems: CartItem[] = [];
  @Input() totalCost: number = 0;
  @Input() cartName: string = '';

  increment(cartItem: CartItem) {
    cartItem.quantity++;
    this.updateCost(cartItem);
  }

  decrement(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      this.updateCost(cartItem);
    }
  }

  private updateCost(cartItem: CartItem) {
    cartItem.product.cost = cartItem.product.price * cartItem.quantity;
  }
}
