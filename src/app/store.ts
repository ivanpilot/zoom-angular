import { Observable, BehaviorSubject } from 'rxjs';

class AncreStore {
  private ancreSubject = new BehaviorSubject<number>(100);
  public ancre$: Observable<number> = this.ancreSubject.asObservable();
  
  setAncrePosition(position: number) {
    this.ancreSubject.next(position);
  }

  getAncrePosition() {
    return this.ancre$;
  }
  

}

export const ancreStore = new AncreStore();
