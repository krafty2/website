import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInstallationDistribComponent } from './gestion-installation-distrib.component';

describe('GestionInstallationDistribComponent', () => {
  let component: GestionInstallationDistribComponent;
  let fixture: ComponentFixture<GestionInstallationDistribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionInstallationDistribComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionInstallationDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
