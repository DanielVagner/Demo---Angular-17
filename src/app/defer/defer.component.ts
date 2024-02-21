import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { CardComponent } from './card/card.component';
import { HeavyComponent } from './heavy/heavy.component';
import { Router } from '@angular/router';

import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';

const MATERIAL = [MatSliderModule, MatProgressSpinnerModule, MatButton, MatIcon]
const COMPONENT = [SkeletonComponent, CardComponent, HeavyComponent]

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [MATERIAL, COMPONENT],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {
  protected isDisplay: boolean = false;
  protected isVisible = false;
  protected performPrefetch: boolean = false;
  protected svgPath = 'assets/logo.svg';

  protected color: ThemePalette = 'accent';
  protected mode: ProgressSpinnerMode = 'indeterminate';


  constructor(private router: Router) { }

  prefetchState() {
    this.performPrefetch = true;
  }

  displayState(){
    this.isDisplay = true;
  }

  navigateHome(){
    this.router.navigate(['/home']);
  }
}
