import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { DetailsComponent } from './details/details.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { MovieResolver } from './movie.resolver';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    data: {
      title: 'Catalog',
    }
  },
  {
    path: 'create',
    component: AddMovieComponent,
    data: {
      title: 'Add Movie',
    }
  },
  {
    path: 'catalog/details/:movieId',
    resolve: {movie: MovieResolver} ,
    component: DetailsComponent,
    data: {
      title: 'Details',
    }
  },
  {
    path: 'catalog/edit/:movieId',
    resolve: {movie: MovieResolver} ,
    component: EditMovieComponent,
    data: {
      title: 'Edit Movie',
    }
  },
  {
    path: 'catalog/delete/:movieId',
    resolve: {movie: MovieResolver} ,
    component: DeleteMovieComponent
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: 'Error 404',
    }
  }
];


export const MovieRoutingModule = RouterModule.forChild(routes)
