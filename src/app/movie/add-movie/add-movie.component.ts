import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {


  constructor(private movieService: MovieService, private router: Router){}
  NewMovieHandler(form: NgForm): void{
    if (form.invalid) {
      return
    }
    const{movieName,img,description}=form.value;
    this.movieService.newMovie(movieName,img,description)
    .subscribe(()=>{
      this.router.navigate(['/catalog'])
    })
  }
}
