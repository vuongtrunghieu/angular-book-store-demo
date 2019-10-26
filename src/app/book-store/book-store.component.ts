import { Component, OnInit } from '@angular/core';

export enum PageList {
  LIST = 'list',
  CART = 'cart',
}

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.scss'],
})
export class BookStoreComponent implements OnInit {
  currentPage: string;
  constructor() {
    this.currentPage = PageList.LIST;
  }

  ngOnInit() {}

  changePage(page: string) {
    this.currentPage = page;
  }
}
