import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPromoComponent } from './gestion-promo.component';

describe('GestionPromoComponent', () => {
  let component: GestionPromoComponent;
  let fixture: ComponentFixture<GestionPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPromoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
