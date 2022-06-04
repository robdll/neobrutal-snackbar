import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SnackNotification } from '../models/notification.model';

@Component({
  selector: 'snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  @Input() notification:SnackNotification;
  @Output() close: EventEmitter<any> = new EventEmitter();

  callParent(): void {
    this.close.emit(null);
  }
}
