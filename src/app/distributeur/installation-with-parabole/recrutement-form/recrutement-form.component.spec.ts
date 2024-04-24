import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementFormComponent } from './recrutement-form.component';

describe('RecrutementFormComponent', () => {
  let component: RecrutementFormComponent;
  let fixture: ComponentFixture<RecrutementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecrutementFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecrutementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
