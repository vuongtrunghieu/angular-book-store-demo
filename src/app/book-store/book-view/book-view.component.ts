import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '@app/book-store/services/book-store.service';
import { BookModel } from '@app/book-store/models/book.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
})
export class BookViewComponent implements OnInit, OnDestroy {
  private _unsubscribe: Subject<void> = new Subject<void>();

  book: BookModel;

  constructor(private readonly _route: ActivatedRoute, private readonly _bookService: BookStoreService) {
    this.book = null;
  }

  ngOnInit() {
    if (this._route.snapshot.paramMap.get('id')) {
      this._bookService.books$.pipe(takeUntil(this._unsubscribe)).subscribe(books => {
        const index = books.findIndex(book => book.id.toString() === this._route.snapshot.paramMap.get('id'));
        this.book = index !== -1 ? books[index] : null;
      });
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  addBookToCart(book: BookModel) {
    const cartItems = this._bookService.cartSource$.getValue();
    const index = cartItems.findIndex(item => item.book.id === book.id);
    if (index !== -1) {
      this._bookService.cartSource$.next(
        cartItems.map((item, itemIndex) => {
          if (itemIndex === index) {
            item.amount++;
          }
          return item;
        }),
      );
    } else {
      this._bookService.cartSource$.next([...cartItems, { book, amount: 1 }]);
    }
    this._bookService.setNotification('Book added to cart');
  }
}
