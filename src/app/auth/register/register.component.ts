import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Posts:Post[];
  
  public  registerForm = this.fb.group ({
    nombre:['',[Validators.required]],
    apellido:['',[Validators.required]],
    institucion:['',[Validators.required]],
    IdInstitucional:[,[Validators.required]],
    email: [ '', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    Rol:['',[Validators.required]],
    remember: [false]
  });
  constructor(public postService:PostService,private authSvc: AuthService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }
  //Se trabaja con una función promesa que permitirá registrar el usuario en authentication firebase
  //Al mismo tiempo guardaré los otros datos no solicitados en auth en firestore database para un uso futuro

  async onRegister(){

    try {

     await this.authSvc.register(this.registerForm.value.email, this.registerForm.value.password).then((user) => {

        Swal.fire({
          icon:'success',
          title:'Gracias por registrarse',
          text:`Se le envio un email de verificación a ${user.user.email}`,
          confirmButtonText:'Aceptar'
        }).then((result) => {
          if (result.value) {

            localStorage.removeItem('email');
            localStorage.removeItem('remember');
            this.router.navigateByUrl('/login');
          }
        })

      })
      
    } catch (e:any) {

      Swal.fire('ERROR', 'La cuenta ya esta uso', 'error' );

      this.registerForm.reset();
       
    }
    //Guarda los datos que no se usarán en ingreso en firestore Database
    this.postService.createPost(this.registerForm.value)
    
    
  }

}
