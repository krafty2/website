import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialgoReadDistribComponent } from './dialgo-read-distrib.component';

describe('DialgoReadDistribComponent', () => {
  let component: DialgoReadDistribComponent;
  let fixture: ComponentFixture<DialgoReadDistribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialgoReadDistribComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialgoReadDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
