import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { CardComponent} from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const Material = [MatButtonModule, MatIconModule, CardComponent]

@Component({
  selector: 'app-prefetch',
  standalone: true,
  imports: [ CommonModule, SkeletonComponent, Material],
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
