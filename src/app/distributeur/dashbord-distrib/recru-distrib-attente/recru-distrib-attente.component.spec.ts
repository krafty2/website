import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruDistribAttenteComponent } from './recru-distrib-attente.component';

describe('RecruDistribAttenteComponent', () => {
  let component: RecruDistribAttenteComponent;
  let fixture: ComponentFixture<RecruDistribAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruDistribAttenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecruDistribAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
