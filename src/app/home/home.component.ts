import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const COMPONENTS = [SkeletonComponent];
const MATERIAL = [MatButtonModule, MatIconModule];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [COMPONENTS, MATERIAL, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected svgPath = 'assets/logo.svg';
  protected isVisible = false;
  protected isPrefetch = false;
  protected isLoaded = false;
}
