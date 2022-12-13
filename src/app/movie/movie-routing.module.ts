import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { MovieResolver } from './movie.resolver';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'create',
    component: AddMovieComponent
  },
  {
    path: 'details/:movieId',
    resolve: {movie: MovieResolver} ,
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
