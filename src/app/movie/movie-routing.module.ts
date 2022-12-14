import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { DetailsComponent } from './details/details.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
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
    path: 'catalog/details/:movieId',
    resolve: {movie: MovieResolver} ,
    component: DetailsComponent
  },
  {
    path: 'catalog/edit/:movieId',
    resolve: {movie: MovieResolver} ,
    component: EditMovieComponent
  },
  {
    path: 'catalog/delete/:movieId',
    resolve: {movie: MovieResolver} ,
    component: DeleteMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
