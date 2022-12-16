import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IMovie } from 'src/app/interfaces/movie';
import { IUser } from 'src/app/interfaces/user';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  movieData: IMovie|null=null;
  user: IUser|null=null;
  isOwner!: boolean;
  isLiked: boolean=false;
  cast!:Array<Array<string>>|undefined;
  get isLoggedIn(){
    return this.authService.isLoggedIn
  }
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService,private apiService:ApiService, private movieService:MovieService){
    
    
    
  }
  ngOnInit(): void {
    this.user=this.authService.user;
    this.movieData=this.activatedRoute.snapshot.data?.['movie'];
    const userId=this.user?._id as any as string
    
    
    this.movieData?.likes.forEach(element => {
      if (element==userId) {
        this.isLiked=true
      }
    });
    
    this.user?._id==this.movieData?.userId ? this.isOwner=true : this.isOwner=false
    
  }
    
}


