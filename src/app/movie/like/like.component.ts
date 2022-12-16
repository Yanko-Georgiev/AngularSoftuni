import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IMovie } from 'src/app/interfaces/movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  movieData: IMovie|null=null;
  movieId: string|undefined;
  constructor(private authService:AuthService, private movieService: MovieService, private router:Router,private activatedRoute: ActivatedRoute){
    this.movieData=this.activatedRoute.snapshot.data?.['movie'];
    this.movieId=this.movieData?._id.toString();
    this.movieService.likeMovie(this.movieId, authService.user?._id.toString()).subscribe({
      next:()=>{
        this.router.navigate([`/catalog/details/${this.movieId}`])
      },
      error:(err)=>{
        console.error(err)
      }
  })
  }
}
