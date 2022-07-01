import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { reporte,medicamento } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-creacionreportes',
  templateUrl: './creacionreportes.component.html',
  styleUrls: ['./creacionreportes.component.css']
})
export class CreacionreportesComponent implements OnInit {

  Reportes:reporte[];
  Medicamentos:medicamento[];

  public  creacionreportesForm = this.fb.group ({
   Medicamento:['',[Validators.required]],
    Razon:['',[Validators.required]],
    Urgencia:['',[Validators.required]]
  });

  constructor(public postService:PostService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.postService.getPostsmedicamentos().subscribe( (res) => {
      this.Medicamentos=res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as medicamento)
        };
      });
    });

  }

  async onCrear(){
    
    //Guarda los datos que no se usarán en ingreso en firestore Database
    this.postService.createPostreporte(this.creacionreportesForm.value)
    this.creacionreportesForm.reset();
  }

}
