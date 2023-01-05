import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpaymentComponent } from './tpayment.component';

describe('TpaymentComponent', () => {
  let component: TpaymentComponent;
  let fixture: ComponentFixture<TpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
