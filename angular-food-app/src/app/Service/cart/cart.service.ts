import { Food } from './../../Model/Food';
import { Cart } from './../../Model/Cart';
import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/Model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  constructor() {}

  addToCart(food:Food):void{
    let cartItem = this.cart.itens.find(item => item.food.id === food.id);

    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }
    this.cart.itens.push(new CartItem(food));
  }

  removeFromCart(foodId:number):void{
    this.cart.itens = this.cart.itens.filter(item => item.food.id != foodId)
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.itens.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
