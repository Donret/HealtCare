import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { actividad } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';

@Component({
    selector: 'app-calendario',
    templateUrl: './calendario.component.html',
    styleUrls: ['./calendario.component.css'],
  })

  export class CalendarioComponent implements OnInit {

    Actividades:actividad[];
    
    public  fechaForm = this.fb.group ({
      fecha:['',[Validators.required]]
    });
  
    constructor(public postService:PostService, private router: Router, private fb: FormBuilder) { 
  
    }
  
    ngOnInit(): void {
      
      this.postService.getPostsactividades().subscribe( (res) => {
        this.Actividades=res.map((e) => {
          return {
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as actividad)
          };
        });
      });
  
      
    }
    deletePost=(actividad) => this.postService.deletePostactividades(actividad)
  
    async onCrear(){
      
      //Guarda los datos que no se usarán en ingreso en firestore Database
      //this.crearactividadForm.value.fecha=this.crearactividadForm.value.fecha.format('YYYY-MM-DD');
      this.postService.createPostactividad(this.fechaForm.value)
      this.fechaForm.reset();
      
    }
  
  }
