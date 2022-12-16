import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth/auth.service';
import { IMovie } from '../interfaces/movie';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{

  movieList: IMovie[]|null=null;
  username?: string;
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  isEmpty!:boolean
  

  constructor(private apiService: ApiService, private authService:AuthService){
  }
  
  ngOnInit(): void {
    this.apiService.loadMovies().subscribe({
      next:(value)=>{
        this.movieList=value.sort((a,b)=>b.likes.length-a.likes.length).slice(0,4);
        this.isEmpty=this.movieList?.length==0
      },
      error: (err)=>{
        console.error(err);
      }
    })
    this.username=this.authService.user?.username
    
    
  }

}
