import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent{
  constructor(private movieService: MovieService, private router:Router){
    this.movieService.deleteMovie('6399c38142df9a0683b6c9f9').subscribe({
      next:()=>{
        router.navigate(['/catalog'])
      },
      error:(err)=>{
        console.error(err)
      }
  })
  }

}
