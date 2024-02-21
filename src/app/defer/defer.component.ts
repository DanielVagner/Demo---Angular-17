import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [MatIcon, MatButton, SkeletonComponent, CardComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {
  public isDisplay: boolean = false;
  public performPrefetch: boolean = false;

  prefetchState() {
    this.performPrefetch = true;
  }

  displayState(){
    this.isDisplay = true;
  }
}
