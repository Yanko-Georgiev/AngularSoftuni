import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit{
  
  movieList: IMovie[]|null=null;
  isEmpty!:boolean
  constructor(private apiService:ApiService){
    
  }
  
  ngOnInit(): void {
    this.apiService.loadMovies().subscribe({
      next:(value)=>{
        this.movieList=value
        this.isEmpty = this.movieList?.length==0
        
        
      },
      error: (err)=>{
        console.error(err)
      }
    })
  }

}
