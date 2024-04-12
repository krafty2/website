import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDistribComponent } from './side-bar-distrib.component';

describe('SideBarDistribComponent', () => {
  let component: SideBarDistribComponent;
  let fixture: ComponentFixture<SideBarDistribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarDistribComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideBarDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
