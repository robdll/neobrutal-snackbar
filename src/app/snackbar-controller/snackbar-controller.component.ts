import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SnackNotification } from '../models/notification.model';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: "snackbar-controller",
  templateUrl: "./snackbar-controller.component.html",
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('750ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class SnackbarControllerComponent implements OnChanges {
  @Input() notifications :Array<SnackNotification>;
  displayerInterval : any;
  current: SnackNotification | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    this.startLoops();
  }

  ngOnDestroy() {
    this.clearIntervals()
  }

  clearIntervals() {
    if(this.displayerInterval) {
      clearInterval(this.displayerInterval);
      this.displayerInterval = undefined;
    }
  }

  startLoops() {
    if (!this.displayerInterval && this.notifications.length > 0) {
      this.current = this.notifications.shift();
      this.displayerInterval = setInterval(() => {
        this.current = undefined;
        if(this.notifications.length > 0) {
          setTimeout(() => {
            this.current = this.notifications.shift();
          }, 250);
        } else {
          this.clearIntervals()
        }
      }, 2750);  
    }
  }

  deleteOne() {
    this.current = undefined;
    if(this.displayerInterval) {
      clearInterval(this.displayerInterval);
      this.displayerInterval = undefined;
    }
    setTimeout(() => {
      this.startLoops();
    }, 250);
  }

}
