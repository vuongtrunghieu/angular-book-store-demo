import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookModel } from '@app/book-store/models/book.model';
import { BookStoreService } from '@app/book-store/services/book-store.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, OnDestroy {
  private _unsubscribe: Subject<void> = new Subject<void>();
  private _reservedBooksData: BookModel[];

  books: BookModel[];
  orderBy: string;
  orderDirection: string;

  constructor(private readonly _bookService: BookStoreService) {
    this.orderBy = 'price';
    this.orderDirection = 'asc';
  }

  ngOnInit() {
    this._bookService.books$.pipe(takeUntil(this._unsubscribe)).subscribe(data => {
      this.books = [...data];
      this._reservedBooksData = [...data];
    });
    this.onSort();
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

    this._bookService.setNotification(`${book.title} added to cart`);
  }

  onSearchBooks(searchText: string): void {
    if (searchText) {
      this.books = [
        ...this._reservedBooksData.filter(
          book =>
            book.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase().trim()) ||
            book.author.toLocaleLowerCase().includes(searchText.toLocaleLowerCase().trim()),
        ),
      ];
    } else {
      this.books = [...this._reservedBooksData];
    }
  }

  onSort(): void {
    switch (this.orderBy) {
      case 'title':
      default:
        this.books.sort((a, b) => (this.orderDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)));
        break;
      case 'price':
        this.books.sort((a, b) => (this.orderDirection === 'asc' ? a.price - b.price : b.price - a.price));
        break;
      case 'pages':
        this.books.sort((a, b) => (this.orderDirection === 'asc' ? a.pages - b.pages : b.pages - a.pages));
        break;
    }
  }
}
