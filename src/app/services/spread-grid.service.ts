import { Injectable, ElementRef } from '@angular/core';
import * as _ from 'lodash';

interface SpreadGrid {
  spreadWidth: number,
  numPrimaryCol: number,
  numSecondaryCol: number,
  widthAncreColInPer: number,
  widthPrimaryColInPer: number,
  widthSecondaryColInPer: number,
  refPointWidth: number
}

@Injectable({
  providedIn: 'root'
})
export class SpreadGridService {
  
  spreadGrid: SpreadGrid = {
    spreadWidth: 358,
    numPrimaryCol: 12,
    numSecondaryCol: 5,
    widthAncreColInPer: 0,
    widthPrimaryColInPer: 1 / 12,
    widthSecondaryColInPer: 1 / (12 * 5),
    refPointWidth: 40,
  };

  constructor() { }

  setGrid(spreadGrid: ElementRef){
    this.spreadGrid = {
      ...this.spreadGrid,
      spreadWidth: spreadGrid.nativeElement.clientWidth
    }
  }

  getGrid(){
    return _.cloneDeep(this.spreadGrid);
  }


  buildGrid(referencePoints: any, ancre: number){
    let coordinates = {};
    let distance;
    _.forEach(referencePoints, (values, venue) => {
      _.forEach(values, (value, point) => {
        distance = value - ancre >= 0 ? 
        +this.spreadGrid.widthPrimaryColInPer + (value - ancre) * this.spreadGrid.widthSecondaryColInPer :
        -this.spreadGrid.widthPrimaryColInPer + (value - ancre) * this.spreadGrid.widthSecondaryColInPer;

        coordinates = {
          ...coordinates,
          [venue]: {
            ...coordinates[venue],
            [point]: 100 * (.5 + distance - .5 * this.spreadGrid.refPointWidth / this.spreadGrid.spreadWidth)
          }
        }
      })
    })
    return coordinates;
  }

}
