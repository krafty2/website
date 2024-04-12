import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReabonnementDistribComponent } from './gestion-reabonnement-distrib.component';

describe('GestionReabonnementDistribComponent', () => {
  let component: GestionReabonnementDistribComponent;
  let fixture: ComponentFixture<GestionReabonnementDistribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionReabonnementDistribComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionReabonnementDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
