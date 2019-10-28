import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-store-sidemenu',
  templateUrl: './store-sidemenu.component.html',
  styleUrls: ['./store-sidemenu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreSidemenuComponent implements OnInit, OnChanges {
  @Input() currentPage: string;
  @Input() cartItemsCount: number;
  @Output() changePage: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.currentPage && changes.currentPage.currentValue) {
      this.currentPage = changes.currentPage.currentValue;
    }
    if (changes.cartItemsCount && changes.cartItemsCount.currentValue) {
      this.cartItemsCount = changes.cartItemsCount.currentValue;
    }
  }
}
