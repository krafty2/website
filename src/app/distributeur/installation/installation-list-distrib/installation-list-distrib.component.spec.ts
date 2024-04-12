import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationListDistribComponent } from './installation-list-distrib.component';

describe('InstallationListDistribComponent', () => {
  let component: InstallationListDistribComponent;
  let fixture: ComponentFixture<InstallationListDistribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationListDistribComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstallationListDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
