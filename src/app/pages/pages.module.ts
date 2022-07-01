import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CalendarioComponent } from './calendario/calendario.component';
import { RegistroMedicamentosComponent } from './registro-medicamentos/registro-medicamentos.component';
import { CreacionhistorialmedicoComponent } from './creacionhistorialmedico/creacionhistorialmedico.component';
import { CreacionactividadComponent } from './creacionactividad/creacionactividad.component';
import { CreacioninventarioComponent } from './creacioninventario/creacioninventario.component';
import { LecturareportesComponent } from './lecturareportes/lecturareportes.component';
import { CreacionreportesComponent } from './creacionreportes/creacionreportes.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MuestreoDatosComponent } from './muestreo-datos/muestreo-datos.component';


@NgModule({
  declarations: [
    CalendarioComponent,
    DashboardComponent,
    PagesComponent,
    RegistroMedicamentosComponent,
    CreacionhistorialmedicoComponent,
    CreacionactividadComponent,
    CreacioninventarioComponent,
    LecturareportesComponent,
    CreacionreportesComponent,
    MuestreoDatosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NoopAnimationsModule


  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    RegistroMedicamentosComponent,
    CreacionhistorialmedicoComponent,
    CreacioninventarioComponent,
    LecturareportesComponent,
    CreacionreportesComponent,
    CreacionactividadComponent,
    CalendarioComponent
  ]
})
export class PagesModule { }
