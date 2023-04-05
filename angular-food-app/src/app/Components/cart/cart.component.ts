import { Router } from '@angular/router';
import { CartItem } from './../../Model/CartItem';
import { Cart } from './../../Model/Cart';
import { CartService } from './../../Service/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService,private router:Router) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.getCart();
  }

  changeQuantity(cartItem: CartItem, quantityString: string) {
    const quantity = parseInt(quantityString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.getCart();
  }

}
