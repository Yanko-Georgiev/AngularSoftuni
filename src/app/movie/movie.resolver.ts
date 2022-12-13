import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api.service';
import { IMovie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<IMovie|null> {
  constructor(private apiService: ApiService, private router:Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IMovie|null| Observable<IMovie>|Promise<IMovie> {
    const movieId = route.params['movieId']
    if (!movieId) {
      this.router.navigate(['/catalog'])
      return null;
    }
    return this.apiService.loadMovie(movieId)
  }
}
