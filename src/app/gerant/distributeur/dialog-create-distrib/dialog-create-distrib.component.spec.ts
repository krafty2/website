import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateDistribComponent } from './dialog-create-distrib.component';

describe('DialogCreateDistribComponent', () => {
  let component: DialogCreateDistribComponent;
  let fixture: ComponentFixture<DialogCreateDistribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCreateDistribComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCreateDistribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
