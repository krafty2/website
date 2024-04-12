import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordDistribComponent } from './dashbord-distrib.component';

describe('DashbordDistribComponent', () => {
  let component: DashbordDistribComponent;
  let fixture: ComponentFixture<DashbordDistribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordDistribComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbordDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
