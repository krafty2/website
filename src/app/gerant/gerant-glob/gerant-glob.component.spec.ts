import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerantGlobComponent } from './gerant-glob.component';

describe('GerantGlobComponent', () => {
  let component: GerantGlobComponent;
  let fixture: ComponentFixture<GerantGlobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerantGlobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GerantGlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
