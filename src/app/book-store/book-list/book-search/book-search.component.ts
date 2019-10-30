import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss'],
})
export class BookSearchComponent implements OnInit {
  @Output() searchBooks: EventEmitter<string> = new EventEmitter<string>();

  searchForm: FormControl;

  constructor() {
    this.searchForm = new FormControl('');
  }

  ngOnInit() {
    this.searchForm.valueChanges.subscribe(res => this.searchBooks.emit(res));
  }
}
