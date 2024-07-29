import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPromoComponent } from './all-promo.component';

describe('AllPromoComponent', () => {
  let component: AllPromoComponent;
  let fixture: ComponentFixture<AllPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllPromoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
