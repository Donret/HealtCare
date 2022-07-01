export class Post {
    id:string ;
    nombre:string ;
    apellido:string ;
    institucion: string ;
    IdInstitucional:string ;
    email: string ;
    password: string ;
    Rol:string ;
}
export class reportes {
    id: string;
    Medicamento :string;
    Razon : string;
    Urgencia : string;
}
export class paciente {
    id: string;
    apellido: string;
    nombre : string;
}

export class medicamento {
    id: string;
    fechaCompra: string;
    nombremedicamento : string;
    Proveedor: string;
    Lote: string;
    Cantidad_Und: string;
    fechaVencimiento
}

export class actividad {
    id: string;
    nombreactividad: string;
    idmedicamento : string;
    idenfermero: string;
    idpaciente: string;
    fecha: string;
    hora: string;
}

export class reporte {
    id: string;
    medicamento:string;
    razon: string;
    urgencia: string;
}