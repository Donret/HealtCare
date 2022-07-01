import { Component, forwardRef, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-registro-medicamentos',
  templateUrl: './registro-medicamentos.component.html',
  styleUrls: ['./registro-medicamentos.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => RegistroMedicamentosComponent),
    }
  ]
})

export class RegistroMedicamentosComponent implements OnInit {
  
  public  crearmedicamentoForm = this.fb.group ({
    nombremedicamento:['',[Validators.required]],
    Lote:['',[Validators.required]],
    Proveedor:['',[Validators.required]],
    Cantidad_Und:['',[Validators.required]],
    fechaCompra: ['',[Validators.required]],
    fechaVencimiento:['',[Validators.required]]
    
  });

  constructor(public postService:PostService, private router: Router, private fb: FormBuilder) {}
  async onCrear(){
    this.postService.createPostmedicamento(this.crearmedicamentoForm.value);
    this.crearmedicamentoForm.reset();
  }
  ngOnInit(): void {
  }
}
