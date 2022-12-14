import { Component, OnInit } from '@angular/core';
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

export class EditMovieComponent implements OnInit{
  
  movieData: IMovie|null=null;
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private authService:AuthService, private router: Router, private apiService:ApiService){
  }
  ngOnInit(): void {
    this.movieData=this.activatedRoute.snapshot.data?.['movie'];
    console.log(this.movieData);
    
  }
  
  EditMovieHandler(form: NgForm): void{
    if (form.invalid) {
      return
    }
    
    const{movieName,img,description}=form.value;
    this.movieService.editMovie("6399c38142df9a0683b6c9f9",movieName,img,description)
    .subscribe(()=>{
      this.router.navigate(['/catalog'])
    })
  }
}
