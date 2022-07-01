import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionreportesComponent } from './creacionreportes.component';

describe('CreacionreportesComponent', () => {
  let component: CreacionreportesComponent;
  let fixture: ComponentFixture<CreacionreportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionreportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionreportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
