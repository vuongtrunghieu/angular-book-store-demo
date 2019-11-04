import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BookModel } from '@app/book-store/book-list/models/book.model';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookViewComponent implements OnInit, OnChanges {
  @Input() book: BookModel;
  @Output() addBookToCart: EventEmitter<BookModel> = new EventEmitter<BookModel>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.book && changes.book.currentValue) {
      this.book = changes.book.currentValue;
    }
  }

  addBook(book: BookModel) {
    this.addBookToCart.emit(book);
  }
}
