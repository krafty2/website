import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReabonnementAttenteComponent } from './reabonnement-attente.component';

describe('ReabonnementAttenteComponent', () => {
  let component: ReabonnementAttenteComponent;
  let fixture: ComponentFixture<ReabonnementAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReabonnementAttenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReabonnementAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
