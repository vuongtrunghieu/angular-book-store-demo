import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import data from '@assets/mock-data/mock-data.json';
import { BookModel } from '@app/book-store/models/book.model';
import { CartItemModel } from '@app/book-store/models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class BookStoreService {
  /* Source data */
  private _booksSource: Subject<BookModel[]> = new BehaviorSubject<BookModel[]>(data as BookModel[]);
  private _viewBook: Subject<BookModel> = new BehaviorSubject<BookModel>(null);
  private _notify: Subject<string> = new Subject<string>();

  /* Expose source data as observables */
  books$: Observable<BookModel[]> = this._booksSource.asObservable();
  viewBook$: Observable<BookModel> = this._viewBook.asObservable();
  notify$: Observable<string> = this._notify.asObservable();
  cartSource$: BehaviorSubject<CartItemModel[]> = new BehaviorSubject<CartItemModel[]>([]);

  constructor() {}

  setBooksSource(books: BookModel[]) {
    this._booksSource.next(books);
  }

  setViewBook(book: BookModel) {
    this._viewBook.next(book);
  }

  setNotification(message: string) {
    this._notify.next(message);
  }
}
