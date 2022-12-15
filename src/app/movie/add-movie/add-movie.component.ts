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
    this.movieService.newMovie(movieName,img,description,topCast)
    .subscribe(()=>{
      this.router.navigate(['/catalog'])
    })
  }
}
