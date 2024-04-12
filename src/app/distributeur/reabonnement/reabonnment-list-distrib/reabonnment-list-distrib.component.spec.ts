import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReabonnmentListDistribComponent } from './reabonnment-list-distrib.component';

describe('ReabonnmentListDistribComponent', () => {
  let component: ReabonnmentListDistribComponent;
  let fixture: ComponentFixture<ReabonnmentListDistribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReabonnmentListDistribComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReabonnmentListDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
