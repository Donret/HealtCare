import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacioninventarioComponent } from './creacioninventario.component';

describe('CreacioninventarioComponent', () => {
  let component: CreacioninventarioComponent;
  let fixture: ComponentFixture<CreacioninventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacioninventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacioninventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
