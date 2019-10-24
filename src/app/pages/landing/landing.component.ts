import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  showBurgerMenu: boolean;

  constructor() {
    this.showBurgerMenu = false;
  }

  ngOnInit() {}
}
