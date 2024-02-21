import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { CardComponent } from './card/card.component';
import { HeavyComponent } from './heavy/heavy.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [MatIcon, MatButton, SkeletonComponent, CardComponent, HeavyComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {
  protected isDisplay: boolean = false;
  protected isVisible = false;
  protected performPrefetch: boolean = false;
  protected svgPath = 'assets/logo.svg';

  prefetchState() {
    this.performPrefetch = true;
  }

  displayState(){
    this.isDisplay = true;
  }
}
