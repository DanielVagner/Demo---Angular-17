import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReceiveComponent } from './recive/recive';
import { SendComponent } from './send/send';

@Component({
  selector: 'app-share',
  standalone: true,
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  imports: [CommonModule, SendComponent, ReceiveComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareComponent {
  protected svgPath = 'assets/logo.svg';
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
