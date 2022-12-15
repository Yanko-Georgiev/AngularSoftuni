import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent{

  movieData: IMovie|null=null;

  constructor(private movieService: MovieService, private router:Router,private activatedRoute: ActivatedRoute){
    this.movieData=this.activatedRoute.snapshot.data?.['movie'];
    console.log(this.movieData);
    
    this.movieService.deleteMovie("").subscribe({
      next:()=>{
        this.router.navigate(['/catalog'])
      },
      error:(err)=>{
        console.error(err)
      }
  })
  }

}
