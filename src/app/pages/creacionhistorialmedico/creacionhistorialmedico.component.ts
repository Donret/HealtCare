import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-creacionhistorialmedico',
  templateUrl: './creacionhistorialmedico.component.html',
  styleUrls: ['./creacionhistorialmedico.component.css']
})
export class CreacionhistorialmedicoComponent implements OnInit {

  public  crearhistorialForm = this.fb.group ({
    nombrepaciente:['',[Validators.required]],
    CausaActual:['',[Validators.required]],
    Ubicacion:['',[Validators.required]],
    EstadoPaciente:['',[Validators.required]],
    Antecedente:['',[Validators.required]],
    fecha:['']
    
  });
  constructor(public postService:PostService, private router: Router, private fb: FormBuilder) { }

  async onCrear(){
    this.postService.createPosthistorial(this.crearhistorialForm.value);
  }
  ngOnInit(): void {
  }

}
