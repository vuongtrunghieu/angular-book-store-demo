import { Pipe, PipeTransform } from '@angular/core';
import { CartItemModel } from '@app/book-store/models/cart-item.model';

@Pipe({
  name: 'cartCount',
  pure: true,
})
export class CartItemsCountPipe implements PipeTransform {
  transform(cartItems: CartItemModel[], ...args: any[]): any {
    if (cartItems.length > 0) {
      let sum = 0;
      cartItems.forEach(item => {
        sum += item.amount;
      });
      return sum;
    } else {
      return 0;
    }
  }
}
