import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BookModel } from '@app/book-store/models/book.model';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
})
export class BookViewComponent implements OnInit, OnChanges {
  @Input() book: BookModel;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.book && changes.book.currentValue) {
      this.book = changes.book.currentValue;
    }
  }
}
