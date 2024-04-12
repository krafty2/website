import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationListComponent } from './installation-list.component';

describe('InstallationListComponent', () => {
  let component: InstallationListComponent;
  let fixture: ComponentFixture<InstallationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallationListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstallationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
