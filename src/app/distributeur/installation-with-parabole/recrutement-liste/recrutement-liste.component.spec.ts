import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecrutementListeComponent } from './recrutement-liste.component';

describe('RecrutementListeComponent', () => {
  let component: RecrutementListeComponent;
  let fixture: ComponentFixture<RecrutementListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecrutementListeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecrutementListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
