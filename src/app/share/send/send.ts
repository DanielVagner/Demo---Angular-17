import { Component, inject } from '@angular/core';
import { SignalService } from '../../shared/services/signal.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-send',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  template: `<button mat-raised-button color="primary" (click)="send()"> Send </button>`,
})
export class SendComponent {
  transfer = inject(SignalService);

  // call service to update count
  send() {
    this.transfer.updateCount();
  }
}