import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ReceiveComponent } from './recive/recive';
import { SendComponent } from './send/send';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-share',
  standalone: true,
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  imports: [CommonModule, SendComponent, ReceiveComponent, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareComponent {
  value = 'Clear me';
  protected svgPath = 'assets/logo.svg';
  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/home']);
  }
}
