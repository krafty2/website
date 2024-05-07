import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaboDistribAttenteComponent } from './reabo-distrib-attente.component';

describe('ReaboDistribAttenteComponent', () => {
  let component: ReaboDistribAttenteComponent;
  let fixture: ComponentFixture<ReaboDistribAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReaboDistribAttenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReaboDistribAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
