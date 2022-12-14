import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IMovie } from 'src/app/interfaces/movie';
import { IUser } from 'src/app/interfaces/user';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  movieData: IMovie|null=null;
  user: IUser|null=null;
  isOwner!: boolean;
  get isLoggedIn(){
    return this.authService.isLoggedIn
  }
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private movieService:MovieService){
    this.user=authService.user;
    console.log(this.activatedRoute.snapshot.data?.['movie']);
    this.movieData=this.activatedRoute.snapshot.data?.['movie'];
    this.user?._id==this.movieData?.userId ? this.isOwner=true : this.isOwner=false
  }
    
}


