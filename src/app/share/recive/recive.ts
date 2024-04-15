import { Component, effect, inject } from '@angular/core';
import { SignalService } from '../../shared/signal.service';

@Component({
  selector: 'receive',
  standalone: true,
  template: ` <h4>Recive: {{ transfer.count() }}</h4> `,
})
export class Receive {
  transfer = inject(SignalService);

  constructor() {
    effect(() => {
      console.log(this.transfer.count());
    });
  }
}
