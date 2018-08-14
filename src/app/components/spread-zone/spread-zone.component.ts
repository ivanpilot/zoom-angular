import { Component, OnInit } from '@angular/core';
import {purple } from '../../../theme';

@Component({
  selector: 'spread-zone',
  templateUrl: './spread-zone.component.html',
  styleUrls: ['./spread-zone.component.scss']
})
export class SpreadZoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('theme is: ', purple)
  }

}
