import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturareportesComponent } from './lecturareportes.component';

describe('LecturareportesComponent', () => {
  let component: LecturareportesComponent;
  let fixture: ComponentFixture<LecturareportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturareportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturareportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
