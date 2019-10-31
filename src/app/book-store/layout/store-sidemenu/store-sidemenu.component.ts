import { Component, OnInit } from '@angular/core';
import { BookStoreService } from '@app/book-store/services/book-store.service';

@Component({
  selector: 'app-store-sidemenu',
  templateUrl: './store-sidemenu.component.html',
  styleUrls: ['./store-sidemenu.component.scss'],
})
export class StoreSidemenuComponent implements OnInit {
  constructor(protected bookService: BookStoreService) {}

  ngOnInit() {}
}
