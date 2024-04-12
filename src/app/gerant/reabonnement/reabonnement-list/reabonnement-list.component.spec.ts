import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReabonnementListComponent } from './reabonnement-list.component';

describe('ReabonnementListComponent', () => {
  let component: ReabonnementListComponent;
  let fixture: ComponentFixture<ReabonnementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReabonnementListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReabonnementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
