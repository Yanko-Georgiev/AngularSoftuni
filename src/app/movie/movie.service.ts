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
  newMovie(movieName: string,img: string, description: string){
    return this.http.post<any>(`${apiURL}/movies`,{movieName, img, description})
  }
  editMovie(id: string, movieName: string, img: string, description:string){
    return this.http.put<any>(`${apiURL}/movies/${id}`,{movieName, img, description})
  }
  deleteMovie(id: string){
    return this.http.delete<any>(`${apiURL}/movies/${id}`)
  }
}
