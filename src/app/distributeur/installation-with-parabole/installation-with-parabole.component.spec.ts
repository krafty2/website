import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationWithParaboleComponent } from './installation-with-parabole.component';

describe('InstallationWithParaboleComponent', () => {
  let component: InstallationWithParaboleComponent;
  let fixture: ComponentFixture<InstallationWithParaboleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationWithParaboleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstallationWithParaboleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
