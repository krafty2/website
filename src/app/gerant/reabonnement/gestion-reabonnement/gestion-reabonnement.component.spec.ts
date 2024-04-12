import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReabonnementComponent } from './gestion-reabonnement.component';

describe('GestionReabonnementComponent', () => {
  let component: GestionReabonnementComponent;
  let fixture: ComponentFixture<GestionReabonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionReabonnementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionReabonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
