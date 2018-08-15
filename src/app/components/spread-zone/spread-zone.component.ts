import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spread-zone',
  templateUrl: './spread-zone.component.html',
  styleUrls: ['./spread-zone.component.scss']
})
export class SpreadZoneComponent implements OnInit {

  twMidPosition: number = -19.2
  constructor() { }

  ngOnInit() {
  }

  increase(){
    console.log('previous midPoint position was: ', this.twMidPosition)
    this.twMidPosition += 5;
    console.log('current midPoint position is: ', this.twMidPosition)
    const twMidPoint = document.getElementById('tw-mid-point')
    twMidPoint.style.setProperty('--twMidPosition', this.twMidPosition + 'px')
  }


}
