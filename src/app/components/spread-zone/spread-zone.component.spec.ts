import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadZoneComponent } from './spread-zone.component';

describe('SpreadZoneComponent', () => {
  let component: SpreadZoneComponent;
  let fixture: ComponentFixture<SpreadZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
