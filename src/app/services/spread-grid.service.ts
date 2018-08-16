import { Injectable, ElementRef } from '@angular/core';
import * as _ from 'lodash';

interface SpreadGrid {
  width: number,
  numPrimaryCol: number,
  numSecondaryCol: number,
  widthAncreColInPer: number,
  widthPrimaryColInPer: number,
  widthSecondaryColInPer: number,
}

@Injectable({
  providedIn: 'root'
})
export class SpreadGridService {
  ancreValue: number = 100;
  
  spreadGrid: SpreadGrid = {
    width: 0,
    numPrimaryCol: 12,
    numSecondaryCol: 5,
    widthAncreColInPer: 0,
    widthPrimaryColInPer: 1 / 12,
    widthSecondaryColInPer: 1 / (12 * 5),
  };

  constructor() { }

  setGrid(spreadGrid: ElementRef){
    this.spreadGrid = {
      ...this.spreadGrid,
      width: spreadGrid.nativeElement.clientWidth
    }
  }

  getGrid(){
    return _.cloneDeep(this.spreadGrid);
  }

  setAncreValue(value: number){
    this.ancreValue = value;
  }

  getAncreValue(){
    return this.ancreValue;
  }

  setPosition(element: any, value: number){
    let distance = value - this.ancreValue >= 0 ? 
    this.spreadGrid.widthPrimaryColInPer + (value - this.ancreValue) * this.spreadGrid.widthSecondaryColInPer : -this.spreadGrid.widthPrimaryColInPer + (value - this.ancreValue) * this.spreadGrid.widthSecondaryColInPer;

    return 100 * (.5 + distance - .5 * element.clientWidth / this.spreadGrid.width);
  }
}
