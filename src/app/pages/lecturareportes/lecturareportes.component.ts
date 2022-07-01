import { Component, OnInit } from '@angular/core';
import { reportes } from 'src/app/post.model';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-lecturareportes',
  templateUrl: './lecturareportes.component.html',
  styleUrls: ['./lecturareportes.component.css']
})
export class LecturareportesComponent implements OnInit {
  reportes: reportes[]
  constructor(private postService:PostService,) {
    

  }

  ngOnInit(): void {

    this.postService.getPostsReportes().subscribe((res)=>{
      this.reportes =res.map((e)=>{
        return{
          id : e.payload.doc.id,
          ...(e.payload.doc.data() as reportes)
        };
      });
    });
    
  }
  deletePost=(reporte) => this.postService.deletePostreportemedicamentos(reporte)

}
