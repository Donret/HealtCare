import { Component, OnInit } from '@angular/core';
import { medicamento } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-creacioninventario',
  templateUrl: './creacioninventario.component.html',
  styleUrls: ['./creacioninventario.component.css']
})
export class CreacioninventarioComponent implements OnInit {

  Medicamentos:medicamento[];

  constructor(private postService:PostService,) { }

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

}
