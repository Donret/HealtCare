import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo:'Acciones',
    icono:'nav-icon fa fa-list',
    submenu:[
      //Debo cambiar los iconos luego
      {titulo:'Calendario', url:'calendario', icono:'fa fa-calendar'},
      {titulo:'Creación de actividad', url:'creacionactividad', icono:'fa fa-list'},
      {titulo:'Creación historial medico', url:'creacionhistorialmedico', icono:'fa fa-file-medical'},
      {titulo:'Inventario', url:'creacioninventario', icono:'fa fa-capsules'},
      {titulo:'Creación de reportes', url:'creacionreportes', icono:'fa fa-file-invoice'},
      {titulo:'Lectura de reportes', url:'lecturareportes', icono:'fa fa-file-invoice'},
      {titulo:'Registro de medicamentos', url:'registro-medicamentos', icono:'fa fa-file-prescription'}
    
    ]
  }]

}
