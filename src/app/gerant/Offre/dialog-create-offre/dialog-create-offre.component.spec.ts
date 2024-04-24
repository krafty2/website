import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateOffreComponent } from './dialog-create-offre.component';

describe('DialogCreateOffreComponent', () => {
  let component: DialogCreateOffreComponent;
  let fixture: ComponentFixture<DialogCreateOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCreateOffreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCreateOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
