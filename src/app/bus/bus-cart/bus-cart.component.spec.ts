import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCartComponent } from './bus-cart.component';

describe('BusCartComponent', () => {
  let component: BusCartComponent;
  let fixture: ComponentFixture<BusCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
