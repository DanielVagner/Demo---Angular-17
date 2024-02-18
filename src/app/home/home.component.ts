import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PrefetchComponent } from '../prefetch/prefetch.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { RouterLink } from '@angular/router';

const COMPONENTS = [PrefetchComponent, SkeletonComponent];
const MATERIAL = [MatButtonModule];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, COMPONENTS, MATERIAL, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected svgPath = 'assets/logo.svg';
  protected isVisible = false;
  protected isPrefetch = false;
  protected isLoaded = false;
}
