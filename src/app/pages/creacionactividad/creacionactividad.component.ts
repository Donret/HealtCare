import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { medicamento, paciente, Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-creacionactividad',
  templateUrl: './creacionactividad.component.html',
  styleUrls: ['./creacionactividad.component.css'],
})
export class CreacionactividadComponent implements OnInit {

  Posts:Post[];
  Pacientes:paciente[];
  Medicamentos:medicamento[];
  
  public  crearactividadForm = this.fb.group ({
    idpaciente:['',[Validators.required]],
    idenfermero:['',[Validators.required]],
    idmedicamento:['',[Validators.required]],
    nombreactividad:['',[Validators.required]],
    fecha:['',[Validators.required]],
    hora:['',[Validators.required]]
  });

  constructor(public postService:PostService, private router: Router, private fb: FormBuilder) { 

  }

  ngOnInit(): void {
    
    this.postService.getPostspacientes().subscribe( (res) => {
      this.Pacientes=res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as paciente)
        };
      });
    });
    this.postService.getPostsmedicamentos().subscribe( (res) => {
      this.Medicamentos=res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as medicamento)
        };
      });
    });
    this.postService.getPosts().subscribe( (res) => {
      this.Posts=res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        };
      });
    });

    
  }
  

  async onCrear(){
    
    //Guarda los datos que no se usarán en ingreso en firestore Database
    //this.crearactividadForm.value.fecha=this.crearactividadForm.value.fecha.format('YYYY-MM-DD');
    this.postService.createPostactividad(this.crearactividadForm.value)
    this.crearactividadForm.reset();
    
  }

}
