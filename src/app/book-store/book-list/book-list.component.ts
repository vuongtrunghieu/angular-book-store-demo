import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import data from '@assets/mock-data/mock-data.json';
import { BookModel } from '@app/book-store/book-list/models/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  @Output() selectBook: EventEmitter<BookModel> = new EventEmitter<BookModel>();
  @Output() addItemToCart: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  books: BookModel[];
  notiMessage: string;
  orderBy: string;
  orderDirection: string;

  constructor() {
    this.books = data;
    this.orderBy = 'price';
    this.orderDirection = 'asc';
    this.notiMessage = '';
  }

  ngOnInit() {
    this.onSort();
  }

  onBookSelect(book: BookModel): void {
    this.selectBook.emit(book);
  }

  addBookToCart(book: BookModel) {
    this.addItemToCart.emit(book);
    this.notiMessage = `${book.title} added to cart`;
  }

  onSearchBooks(searchText: string): void {
    if (searchText) {
      this.books = [
        ...data.filter(
          book =>
            book.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase().trim()) ||
            book.author.toLocaleLowerCase().includes(searchText.toLocaleLowerCase().trim()),
        ),
      ];
    } else {
      this.books = data;
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
