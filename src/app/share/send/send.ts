import { Component, inject } from '@angular/core';
import { SignalService } from '../../shared/signal.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'send',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  template: `<button mat-raised-button color="primary" (click)="send()"> Send </button>`,
})
export class Send {
  transfer = inject(SignalService);

  send() {
    this.transfer.updateCount();
  }
}