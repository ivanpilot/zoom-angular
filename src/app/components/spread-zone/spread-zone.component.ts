import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpreadGridService } from '../../services/spread-grid.service';
// import { Observer } from 'rxjs';
// import { ancreStore } from '../../store'; 
@Component({
  selector: 'spread-zone',
  templateUrl: './spread-zone.component.html',
  styleUrls: ['./spread-zone.component.scss']
})
export class SpreadZoneComponent implements OnInit {
  @ViewChild('spread') spread: ElementRef;
  // @ViewChild('twBid') twBid: ElementRef;
  @ViewChild('twAsk') twask: ElementRef;
  // @ViewChild('twMid') twMid: ElementRef;
  // @ViewChild('vmoBid') vmoBid: ElementRef;
  // @ViewChild('vmoAsk') vmoAsk: ElementRef;
  // @ViewChild('vmoMid') vmoMid: ElementRef;
  ancrePoint: number = 100;

  referencePointsValue: any = {
    tw: {
      bid: 95,
      ask: 105,
      mid: 100,
    },
    // vmo: {
    //   bid: 84,
    //   ask: 92,
    //   mid: 88
    // }
  };

  referencePointsCoordinates: any = {
    tw: {
      bid: null,
      ask: null,
      mid: null,
    },
    // vmo: {
    //   bid: 84,
    //   ask: 92,
    //   mid: 88
    // }
  };

  constructor(private spreadGrid: SpreadGridService) {}

  ngOnInit() {
    // ancreStore.ancre$.subscribe((data) => {
    //   console.log('data is >>> ', data);
    //   this.spreadGrid.setAncreValue(data);
    // })
    this.referencePointsCoordinates = this.buildGrid(this.referencePointsValue, this.ancrePoint);
  }

  // ngAfterViewInit() {
  //   console.log('spread >> ', this.spread)
  //   // this.spreadGrid.setGrid(this.spread);
  // }

  //purely for this playground. function not needed once merge with live project
  // setUniquePositionPoint(element, value){
  //   debugger
  //   this.twAsk = this.spreadGrid.setPosition(element, value);
  // }

  buildGrid(referencePoints, ancre){
    return this.spreadGrid.buildGrid(referencePoints, ancre);
  }

  resetAncre(value){
    this.ancrePoint = value;
    this.referencePointsCoordinates = this.buildGrid(this.referencePointsValue, value);
  }


}
