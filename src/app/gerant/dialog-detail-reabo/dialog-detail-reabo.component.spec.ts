import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetailReaboComponent } from './dialog-detail-reabo.component';

describe('DialogDetailReaboComponent', () => {
  let component: DialogDetailReaboComponent;
  let fixture: ComponentFixture<DialogDetailReaboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDetailReaboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogDetailReaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
