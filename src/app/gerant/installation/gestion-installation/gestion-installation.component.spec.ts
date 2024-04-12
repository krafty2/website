import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInstallationComponent } from './gestion-installation.component';

describe('GestionInstallationComponent', () => {
  let component: GestionInstallationComponent;
  let fixture: ComponentFixture<GestionInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionInstallationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
