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

  constructor() {
    this.books = data;
    this.orderBy = 'price';
    this.notiMessage = '';
  }

  ngOnInit() {}

  onBookSelect(book: BookModel): void {
    this.selectBook.emit(book);
  }

  addBookToCart(book: BookModel) {
    this.addItemToCart.emit(book);
    this.notiMessage = `${book.title} added to cart`;
  }
}
