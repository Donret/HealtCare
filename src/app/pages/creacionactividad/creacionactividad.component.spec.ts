import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionactividadComponent } from './creacionactividad.component';

describe('CreacionactividadComponent', () => {
  let component: CreacionactividadComponent;
  let fixture: ComponentFixture<CreacionactividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionactividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionactividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
