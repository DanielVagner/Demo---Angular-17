import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Receive } from './recive/recive';
import { Send } from './send/send';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  standalone: true,
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  imports: [CommonModule, Send, Receive],
})
export class ShareComponent implements OnInit {
  protected svgPath = 'assets/logo.svg';
  constructor(private router: Router) {}

  ngOnInit() {}


  navigateHome() {
    this.router.navigate(['/home']);
  }
}
