import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeInstallationFormComponent } from './demande-installation-form.component';

describe('DemandeInstallationFormComponent', () => {
  let component: DemandeInstallationFormComponent;
  let fixture: ComponentFixture<DemandeInstallationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeInstallationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandeInstallationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
