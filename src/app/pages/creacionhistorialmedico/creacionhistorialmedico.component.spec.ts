import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionhistorialmedicoComponent } from './creacionhistorialmedico.component';

describe('CreacionhistorialmedicoComponent', () => {
  let component: CreacionhistorialmedicoComponent;
  let fixture: ComponentFixture<CreacionhistorialmedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionhistorialmedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionhistorialmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
