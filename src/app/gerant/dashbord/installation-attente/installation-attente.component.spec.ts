import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationAttenteComponent } from './installation-attente.component';

describe('InstallationAttenteComponent', () => {
  let component: InstallationAttenteComponent;
  let fixture: ComponentFixture<InstallationAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationAttenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstallationAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
