import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Subscription, tap } from 'rxjs';
import { environment } from 'src/environments/environments';
import { IMovie } from './interfaces/movie';
import { IUser } from './interfaces/user';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
    loadMovies() {
      return this.httpClient.get<IMovie[]>(`${apiURL}/movies`)
    }
    loadMovie(id: number) {
      return this.httpClient.get<IMovie>(`${apiURL}/movies/${id}`)
    }
}
