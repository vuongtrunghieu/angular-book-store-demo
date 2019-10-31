import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, group, style, transition, trigger } from '@angular/animations';
import { BookStoreService } from '@app/book-store/services/book-store.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-store-notification',
  templateUrl: './store-notification.component.html',
  styleUrls: ['./store-notification.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [style({ transform: 'translate3d(0, 100%, 0)' }), animate(250)]),
      transition(':leave', [
        group([
          animate(
            '0.2s ease',
            style({
              transform: 'translate3d(0, 0, 0)',
            }),
          ),
          animate(
            '0.5s 0.2s ease',
            style({
              opacity: 0,
            }),
          ),
        ]),
      ]),
    ]),
  ],
})
export class StoreNotificationComponent implements OnInit, OnDestroy {
  private _unsubscribe: Subject<void> = new Subject<void>();

  message: string;
  show: boolean;

  constructor(private readonly _bookService: BookStoreService) {
    this.show = false;
  }

  ngOnInit() {
    this._bookService.notify$.pipe(takeUntil(this._unsubscribe)).subscribe(message => {
      this.message = message;
      this.show = true;
    });
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
