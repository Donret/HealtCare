import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { rejects } from 'assert';
import { Post,actividad,reporte } from './post.model';
import { Postcrearactividad } from './postcrearactividad.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore:AngularFirestore) {
    
  }
  //Toma todos los objetos de la colección "datos_usuarios"
  getPosts(){
    return this.angularFirestore.collection("datos_usuarios").snapshotChanges()
  }
  //Envia un nuevo objeto a la colección "datos_usuarios"
  createPost(post:Post){
    return new Promise<any> ((resolve,reject)=>{
      this.angularFirestore.collection("datos_usuarios").add(post).then((response)=>{
        console.log(response)
      },
      (error)=>{
        reject(error)
      })
    })
  }

  //Envia un nuevo objeto a la colección "reportes_Medicamentos"
  createPostreporte(post:Post){
    return new Promise<any> ((resolve,reject)=>{
      this.angularFirestore.collection("reportes_Medicamentos").add(post).then((response)=>{
        console.log(response)
      },
      (error)=>{
        reject(error)
      })
    })
  }
  //Toma todos los objetos de la colección "reportes_Medicamentos"
  getPostsReportes(){
    return this.angularFirestore.collection("reportes_Medicamentos").snapshotChanges()
  }

  //Elimina un reporte_Medicamentos
  deletePostreportemedicamentos(reporte){
    return this.angularFirestore
    .collection("reportes_Medicamentos")
    .doc(reporte.id)
    .delete();
  }
  //Elimina una actividad
  deletePostactividades(actividad){
    return this.angularFirestore
    .collection("actividades")
    .doc(actividad.id)
    .delete();
  }

  //Toma todos los objetos de la colección "datos_Pacientes"
  getPostspacientes(){
    return this.angularFirestore.collection("datos_pacientes").snapshotChanges()
  }

  //Toma todos los objetos de la colección "datos_Medicamentos"
  getPostsmedicamentos(){
    return this.angularFirestore.collection("medicamentos").snapshotChanges()
  }

  getPostsactividades(){
    return this.angularFirestore.collection("medicamentos").snapshotChanges()
  }



  //Envia un nuevo objeto a la colección "datos_Actividades"
  createPostactividad(actividad:actividad){
    return new Promise<any> ((resolve,reject)=>{
      this.angularFirestore.collection("actividades").add(actividad).then((response)=>{
        console.log(response)
      },
      (error)=>{
        reject(error)
      })
    })
  }

  //Envia un nuevo objeto a la colección "datos_historial"
  createPosthistorial(post:Post){
    return new Promise<any> ((resolve,reject)=>{
      this.angularFirestore.collection("datos_historial").add(post).then((response)=>{
        console.log(response)
      },
      (error)=>{
        reject(error)
      })
    })
  }

  //Envia un nuevo objeto a la colección "medicamentos"
  createPostmedicamento(post:Postcrearactividad){
    return new Promise<any> ((resolve,reject)=>{
      this.angularFirestore.collection("medicamentos").add(post).then((response)=>{
        console.log(response)
      },
      (error)=>{
        reject(error)
      })
    })
  }
  
}


//------------------FUTURAS ACTIVIDADES--------------------//

  //Descripción: Toma un objeto especifico de la coleccíon establecida
  // getPostById(id:any){
  //   return this.angularFirestore.collection("datos_Usuarios").doc(id).valueChanges()
  // } 

  //Descripción: Toma un objeto con un Id especifico y modifica sus datos
  // updatePost(post:Post,id:any ){
  //   return this.angularFirestore.collection("datos_usuarios").doc(id).update({
  //     nombre:post.nombre,
  //     apellido:post.apellido,
  //     institucion:post.institucion,
  //     IdInstitucional:post.IdInstitucional,
  //     correo:post.email,
  //     contraseña:post.password,
  //     rol:post.Rol
  //   })
  // }

  //Descripción: Elimina un objeto especificandole la colección donde se encuentra y el Id del objeto
  // deletePost(post: any){
  //   return this.angularFirestore.collection("datos_usuarios").doc(post.id).delete()
  // }


//------------------FUTURAS ACTIVIDADES--------------------//