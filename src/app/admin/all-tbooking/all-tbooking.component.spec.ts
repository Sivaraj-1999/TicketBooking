import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTbookingComponent } from './all-tbooking.component';

describe('AllTbookingComponent', () => {
  let component: AllTbookingComponent;
  let fixture: ComponentFixture<AllTbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTbookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
