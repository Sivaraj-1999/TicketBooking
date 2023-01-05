import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainCartComponent } from './train-cart.component';

describe('TrainCartComponent', () => {
  let component: TrainCartComponent;
  let fixture: ComponentFixture<TrainCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
