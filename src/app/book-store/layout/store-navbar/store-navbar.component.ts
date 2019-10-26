import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-navbar',
  templateUrl: './store-navbar.component.html',
  styleUrls: ['./store-navbar.component.scss'],
})
export class StoreNavbarComponent implements OnInit {
  showBurger: boolean;

  constructor() {
    this.showBurger = false;
  }

  ngOnInit() {}

  someAction() {
    alert('Not available in this DEMO');
  }
}
