import { Component, OnInit } from '@angular/core';
import data from '@assets/mock-data/mock-data.json';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: any[];
  orderBy: string;

  constructor() {
    this.books = data;
    this.orderBy = 'price';
  }

  ngOnInit() {}
}
