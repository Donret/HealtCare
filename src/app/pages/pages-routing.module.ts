import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { UsuariosComponent } from './usuarios/usuarios.component';
// import { ProductosComponent } from './productos/productos.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CreacionactividadComponent } from './creacionactividad/creacionactividad.component';
import { CreacionhistorialmedicoComponent } from './creacionhistorialmedico/creacionhistorialmedico.component';
import { CreacioninventarioComponent } from './creacioninventario/creacioninventario.component';
import { CreacionreportesComponent } from './creacionreportes/creacionreportes.component';
import { LecturareportesComponent } from './lecturareportes/lecturareportes.component';
import { RegistroMedicamentosComponent } from './registro-medicamentos/registro-medicamentos.component';

import { AuthGuard } from '../guards/auth.guard';


const routes:Routes=[
  {path:'dashboard', component:PagesComponent, canActivate:[AuthGuard],
  children:[
    {path:'', component:DashboardComponent, data:{titulo:'Dashboard'}},
    {path:'calendario', component:CalendarioComponent, data:{titulo:'Calendario'}},
    {path:'creacionactividad', component:CreacionactividadComponent, data:{titulo:'CreaciónActividad'}},
    {path:'creacionhistorialmedico', component:CreacionhistorialmedicoComponent, data:{titulo:'CreaciónhistorialMedico'}},
    {path:'creacioninventario', component:CreacioninventarioComponent, data:{titulo:'CreaciónInventario'}},
    {path:'creacionreportes', component:CreacionreportesComponent, data:{titulo:'CreaciónReportes'}},
    {path:'lecturareportes', component:LecturareportesComponent, data:{titulo:'LecturaReportes'}},
    {path:'registro-medicamentos', component:RegistroMedicamentosComponent, data:{titulo:'RegistroMedicamentos'}}

    // {path:'usuarios', component:UsuariosComponent,data:{titulo:'Usuarios'}},
    // {path:'productos', component:ProductosComponent, data:{titulo:'Productos'}}
  ]
}
]


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
