import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { CardComponent} from './card/card.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-prefetch',
  standalone: true,
  imports: [ CommonModule, CardComponent, SkeletonComponent, MatButtonModule],
  templateUrl: './prefetch.component.html',
  styleUrl: './prefetch.component.scss'
})
export class PrefetchComponent {

  protected isPrefetch = false;
  protected isLoaded = false;

  prefetchState() {
    this.isPrefetch = !this.isPrefetch;
  }
}
