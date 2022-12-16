import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environments';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  newMovie(movieName: string, img: string, description: string, topCast: Array<Array<string>>){
    return this.http.post<any>(`${apiURL}/movies`,{movieName, img, description, topCast})
  }
  editMovie(id: string|undefined, movieName: string, img: string, description:string,topCast:Array<Array<string>>){
    return this.http.put<any>(`${apiURL}/movies/${id}`,{movieName, img, description, topCast})
  }
  deleteMovie(id: string|undefined){
    return this.http.delete<any>(`${apiURL}/movies/${id}`)
  }
  likeMovie(id: string|undefined, userId: string|undefined){
    return this.http.put<any>(`${apiURL}/movies/${id}/like`,{userId})

  }
}
