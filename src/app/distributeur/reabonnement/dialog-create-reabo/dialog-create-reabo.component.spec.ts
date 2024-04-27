import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateReaboComponent } from './dialog-create-reabo.component';

describe('DialogCreateReaboComponent', () => {
  let component: DialogCreateReaboComponent;
  let fixture: ComponentFixture<DialogCreateReaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCreateReaboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCreateReaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
