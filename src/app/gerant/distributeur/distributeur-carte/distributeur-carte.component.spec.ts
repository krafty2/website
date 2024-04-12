import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeurCarteComponent } from './distributeur-carte.component';

describe('DistributeurCarteComponent', () => {
  let component: DistributeurCarteComponent;
  let fixture: ComponentFixture<DistributeurCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributeurCarteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistributeurCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
