import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItemModel } from '@app/book-store/cart/models/cartItemModel';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements OnInit, OnChanges {
  @Input() cartItems: CartItemModel[];
  @Output() changeCartItems: EventEmitter<CartItemModel[]> = new EventEmitter<CartItemModel[]>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cartItems && changes.cartItems.currentValue) {
      this.cartItems = changes.cartItems.currentValue;
    }
  }

  onChangeAmount(item: CartItemModel) {
    const index = this.cartItems.indexOf(item);

    if (index !== -1) {
      this.cartItems = this.cartItems.map(cartItem => {
        if (cartItem.book.id === item.book.id) {
          return item;
        }
        return cartItem;
      });
      this.changeCartItems.emit(this.cartItems);
    }
  }

  onRemoveItem(item: CartItemModel): void {
    const index = this.cartItems.indexOf(item);

    if (index !== -1) {
      this.cartItems = this.cartItems.filter(cartItem => cartItem.book.id !== item.book.id);
      this.changeCartItems.emit(this.cartItems);
    }
  }
}
