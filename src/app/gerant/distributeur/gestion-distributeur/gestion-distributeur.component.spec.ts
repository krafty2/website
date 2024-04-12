import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDistributeurComponent } from './gestion-distributeur.component';

describe('GestionDistributeurComponent', () => {
  let component: GestionDistributeurComponent;
  let fixture: ComponentFixture<GestionDistributeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionDistributeurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionDistributeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
