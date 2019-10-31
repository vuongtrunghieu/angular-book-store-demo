import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartItemModel } from '@app/book-store/models/cart-item.model';
import { BookStoreService } from '@app/book-store/services/book-store.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  private _unsubscribe: Subject<void> = new Subject<void>();

  cartItems: CartItemModel[];

  constructor(private readonly _bookService: BookStoreService) {}

  ngOnInit() {
    this._bookService.cartSource$.pipe(takeUntil(this._unsubscribe)).subscribe(data => {
      this.cartItems = data;
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
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
      this._bookService.cartSource$.next(this.cartItems);
    }
  }

  onRemoveItem(item: CartItemModel): void {
    const index = this.cartItems.indexOf(item);

    if (index !== -1) {
      this.cartItems = this.cartItems.filter(cartItem => cartItem.book.id !== item.book.id);
      this._bookService.cartSource$.next(this.cartItems);
    }
  }
}
