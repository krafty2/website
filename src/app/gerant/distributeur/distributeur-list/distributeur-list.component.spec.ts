import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeurListComponent } from './distributeur-list.component';

describe('DistributeurListComponent', () => {
  let component: DistributeurListComponent;
  let fixture: ComponentFixture<DistributeurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistributeurListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DistributeurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
