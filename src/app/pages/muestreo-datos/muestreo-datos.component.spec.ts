import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestreoDatosComponent } from './muestreo-datos.component';

describe('MuestreoDatosComponent', () => {
  let component: MuestreoDatosComponent;
  let fixture: ComponentFixture<MuestreoDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestreoDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestreoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
