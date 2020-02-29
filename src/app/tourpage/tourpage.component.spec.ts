import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourpageComponent } from './tourpage.component';

describe('tourpageComponent', () => {
  let component: TourpageComponent;
  let fixture: ComponentFixture<TourpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
