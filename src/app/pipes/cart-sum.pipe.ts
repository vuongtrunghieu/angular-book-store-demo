import { Pipe, PipeTransform } from '@angular/core';
import { CartItemModel } from '@app/book-store/models/cart-item.model';

@Pipe({
  name: 'cartSum',
  pure: true,
})
export class CartSumPipe implements PipeTransform {
  transform(cartItems: CartItemModel[], ...args: any[]): number {
    if (cartItems.length > 0) {
      let sum = 0;
      cartItems.forEach(item => {
        sum += item.amount * item.book.price;
      });
      return sum;
    } else {
      return 0;
    }
  }
}
