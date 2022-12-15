import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IMovie } from 'src/app/interfaces/movie';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  
  movieList!: IMovie[];
  userId:string|undefined;
  isEmpty!:boolean;
  constructor(private apiService:ApiService, private authService:AuthService){ 
  }
  
  ngOnInit(): void {
    this.apiService.loadMovies().subscribe({
      next:(value)=>{
        this.movieList=value
        this.userId=this.authService.user?._id.toString()
        this.movieList = this.movieList.filter(x=>x.userId._id.toString()==this.userId)
        console.log(this.movieList);
        console.log(this.userId);
        
        
        this.isEmpty=this.movieList.length==0
      },
      error: (err)=>{
        console.error(err)
      }
    })
  }
}
