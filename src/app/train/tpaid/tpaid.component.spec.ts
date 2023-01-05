import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpaidComponent } from './tpaid.component';

describe('TpaidComponent', () => {
  let component: TpaidComponent;
  let fixture: ComponentFixture<TpaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
