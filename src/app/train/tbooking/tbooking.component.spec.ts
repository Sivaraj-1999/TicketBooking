import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TbookingComponent } from './tbooking.component';

describe('TbookingComponent', () => {
  let component: TbookingComponent;
  let fixture: ComponentFixture<TbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
