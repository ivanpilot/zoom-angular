import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'spread-zone',
  templateUrl: './spread-zone.component.html',
  styleUrls: ['./spread-zone.component.scss']
})
export class SpreadZoneComponent implements OnInit {
  @ViewChild('spread') spread: ElementRef;
  @ViewChild('twmid') twmid: ElementRef;

  twMidPosition: number = 109.2;
  tpos: number = 50;
  constructor() { }

  ngOnInit() {
    // console.log('spread width >>', ('#spread').width());
  }

  ngAfterViewInit() {
    console.log('spread >> ', this.spread)
    console.log('spread native element >> ', this.spread.nativeElement.clientWidth)
  }

  increase(){
    this.twmid.nativeElement.style.setProperty('--twMidPosition', this.twMidPosition + 'px')
  }


}
