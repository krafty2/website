import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeurGlobComponent } from './distributeur-glob.component';

describe('DistributeurGlobComponent', () => {
  let component: DistributeurGlobComponent;
  let fixture: ComponentFixture<DistributeurGlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributeurGlobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistributeurGlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
