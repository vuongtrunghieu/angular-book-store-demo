import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { animate, group, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-store-notification',
  templateUrl: './store-notification.component.html',
  styleUrls: ['./store-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class StoreNotificationComponent implements OnInit, OnChanges {
  @Input() message: string;
  show: boolean;

  constructor() {
    this.show = false;
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.message && changes.message.currentValue) {
      this.message = changes.message.currentValue;
      if (this.message) {
        this.show = true;
      }
    }
  }
}
