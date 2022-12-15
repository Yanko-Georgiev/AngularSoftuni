import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IMovie } from 'src/app/interfaces/movie';
import { IUser } from 'src/app/interfaces/user';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})

export class EditMovieComponent{
  movieId!:string|undefined
  movieData: IMovie|null=null;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private authService:AuthService, private router: Router, private apiService:ApiService){
    this.movieData=this.activatedRoute.snapshot.data?.['movie'];
    console.log(this.movieData);
  }
  
  @Input() movieDataForm =this.movieData
  
  EditMovieHandler(form: NgForm): void{
    if (form.invalid) {
      return
    }
    this.movieId=this.movieData?._id.toString()
    const{movieName,img,description,topCast1,topCast2,topCast3,topCast4,topCast5,topCastRole1,topCastRole2,topCastRole3,topCastRole4,topCastRole5}=form.value;
    const topCast:Array<Array<string>>=[[topCast1,topCastRole1],[topCast2,topCastRole2],[topCast3,topCastRole3],[topCast4,topCastRole4],[topCast5,topCastRole5]]
   
    let i = 0
    while (i < topCast.length) {
      if(topCast[i][0]==''||topCast[i][1]==''){
        (topCast.splice(i,1))
      }else{
        i++;
      }
      
    }
    this.movieService.editMovie(this.movieId,movieName,img,description,topCast)
    .subscribe(()=>{
      this.router.navigate(['/catalog'])
    })
  }
}
