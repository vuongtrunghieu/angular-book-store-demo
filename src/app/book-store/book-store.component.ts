import { Component, OnInit } from '@angular/core';
import { BookModel } from '@app/book-store/book-list/models/book.model';
import { CartItemModel } from '@app/book-store/cart/models/cartItemModel';

export enum PageList {
  LIST = 'list',
  CART = 'cart',
  BOOK_VIEW = 'book_view',
}

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss'],
})
export class BookStoreComponent implements OnInit {
  currentPage: string;
  selectedBook: BookModel;
  cartItems: CartItemModel[];

  constructor() {
    this.currentPage = PageList.LIST;
    this.selectedBook = null;
    this.cartItems = [];
  }

  ngOnInit() {}

  changePage(page: string) {
    this.currentPage = page;
  }

  goToBookView(book: BookModel) {
    this.selectedBook = book;
    this.currentPage = PageList.BOOK_VIEW;
  }

  addItemToCart(book: BookModel) {
    const index = this.cartItems.findIndex(item => item.book.id === book.id);
    if (index !== -1) {
      this.cartItems = this.cartItems.map((item, itemIndex) => {
        if (itemIndex === index) {
          item.amount++;
        }
        return item;
      });
    } else {
      this.cartItems = [...this.cartItems, { book, amount: 1 }];
    }
  }

  changeCartItems(cart: CartItemModel[]) {
    this.cartItems = [...cart];
  }
}
