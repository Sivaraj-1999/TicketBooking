import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TseatComponent } from './tseat.component';

describe('TseatComponent', () => {
  let component: TseatComponent;
  let fixture: ComponentFixture<TseatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TseatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
