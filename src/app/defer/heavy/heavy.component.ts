import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import {MatListModule} from '@angular/material/list';


const MATERIAL = [MatListModule, MatIconModule, MatDividerModule, DatePipe]


export interface Section {
  name: string;
  updated: Date;
}


@Component({
  selector: 'app-heavy',
  standalone: true,
  imports: [MATERIAL],
  templateUrl: './heavy.component.html',
  styleUrl: './heavy.component.scss'
})
export class HeavyComponent {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
}

