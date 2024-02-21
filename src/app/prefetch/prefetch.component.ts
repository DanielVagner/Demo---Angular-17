import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { CardComponent} from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const Material = [MatButtonModule, MatIconModule]
const Components = [CardComponent]

@Component({
  selector: 'app-prefetch',
  standalone: true,
  imports: [ CommonModule, SkeletonComponent, Material, Components],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './prefetch.component.html',
  styleUrl: './prefetch.component.scss'
})
export class PrefetchComponent {
  public isDisplay: boolean = false;
  public performPrefetch: boolean = false;

  prefetchState() {
    this.performPrefetch = true;
  }

  displayState(){
    this.isDisplay = true;
  }
}
