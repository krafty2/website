import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeurFormComponent } from './distributeur-form.component';

describe('DistributeurFormComponent', () => {
  let component: DistributeurFormComponent;
  let fixture: ComponentFixture<DistributeurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributeurFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistributeurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
