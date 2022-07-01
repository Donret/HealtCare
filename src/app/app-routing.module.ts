import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { CreacionactividadComponent } from './pages/creacionactividad/creacionactividad.component';
import { CreacionhistorialmedicoComponent } from './pages/creacionhistorialmedico/creacionhistorialmedico.component';
import { CreacioninventarioComponent } from './pages/creacioninventario/creacioninventario.component';
import { LecturareportesComponent } from './pages/lecturareportes/lecturareportes.component';
import { RegistroMedicamentosComponent } from './pages/registro-medicamentos/registro-medicamentos.component';
import { CreacionreportesComponent } from './pages/creacionreportes/creacionreportes.component';


const routes:Routes=[

  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:NopageFoundComponent},
  {path:'calendario', component:CalendarioComponent},
  {path:'creacionactividad', component:CreacionactividadComponent},
  {path:'creacionhistorialmedico', component:CreacionhistorialmedicoComponent},
  {path:'creacioninventario', component:CreacioninventarioComponent},
  {path:'creacionreportes', component:CreacionreportesComponent},
  {path:'lecturareportes', component:LecturareportesComponent},
  {path:'registromedicamentos', component:RegistroMedicamentosComponent}


]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
