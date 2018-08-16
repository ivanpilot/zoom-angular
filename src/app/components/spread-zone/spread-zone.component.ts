import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpreadGridService } from '../../services/spread-grid.service'

@Component({
  selector: 'spread-zone',
  templateUrl: './spread-zone.component.html',
  styleUrls: ['./spread-zone.component.scss']
})
export class SpreadZoneComponent implements OnInit {
  @ViewChild('spread') spread: ElementRef;
  @ViewChild('twmid') twmid: ElementRef;

  twMidPosition: number = 109.2;
  twMaxValue: number = 110;
  twMaxPosition: number = 50;
  constructor(private spreadGrid: SpreadGridService) { }

  ngOnInit() {
    // console.log('spread width >>', ('#spread').width());
  }

  ngAfterViewInit() {
    console.log('spread >> ', this.spread)
    // console.log('spread native element >> ', this.spread.nativeElement.clientWidth)
    this.spreadGrid.setGrid(this.spread);
  }

  increase(element, value){
    // this.twmid.nativeElement.style.setProperty('--twMidPosition', this.twMidPosition + 'px')
    this.twMaxPosition = this.spreadGrid.setPosition(element, value);
    debugger
  }


}
