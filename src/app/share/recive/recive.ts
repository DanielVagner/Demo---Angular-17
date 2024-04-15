import { Component, effect, inject, input } from '@angular/core';
import { SignalService } from '../../shared/services/signal.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-receive',
  standalone: true,
  imports: [SlicePipe],
  styles: [
    `
      .wrap-text {
        overflow-wrap: break-word;
        max-width: 100%;
        overflow: auto;
      }
    `,
  ],
  template: `
    <div>
      <h3>Listen to changes from parent</h3>
      <p class="wrap-text">
        {{
          inputText().length > 20
            ? (inputText() | slice: 0 : 20) + '...'
            : inputText()
        }}
      </p>
    </div>
    <div>
      <h3>Listen to changes from sibling</h3>
      <p>Recive: {{ transfer.count() }}</p>
    </div>
  `,
})
export class ReceiveComponent {
  inputText = input<string>('');
  transfer = inject(SignalService);

  constructor() {
    // listen to reacitve function
    effect(() => {
      console.log(this.transfer.count() + ' from service');
      console.log(this.inputText() + ' from input');
    });
  }
}
