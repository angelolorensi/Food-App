import { CartItem } from './CartItem';

export class Cart{

  itens: CartItem[] = [];

  getTotalPrice():number{
    let totalPrice = 0;
    this.itens.forEach(item => {
      totalPrice += item.getPrice();
    })
    return totalPrice;
  }

}
