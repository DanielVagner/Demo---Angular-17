import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalService {
  count = signal<number>(0);
  constructor() {}

  updateCount() {
    this.count.update((val) => val + 1);
  }
}
