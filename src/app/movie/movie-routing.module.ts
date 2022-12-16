import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../guard/auth.activate';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { DetailsComponent } from './details/details.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { LikeComponent } from './like/like.component';
import { MovieResolver } from './movie.resolver';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    data: {
      title: 'Catalog',
      loginRequired: true
    }
  },
  {
    path: 'create',
    component: AddMovieComponent,
    data: {
      title: 'Add Movie',
      loginRequired: true
    }
  },
  {
    path: 'catalog/details/:movieId',
    resolve: {movie: MovieResolver} ,
    component: DetailsComponent,
    data: {
      title: 'Details',
      loginRequired: true
    }
  },
  {
    path: 'catalog/edit/:movieId',
    resolve: {movie: MovieResolver} ,
    component: EditMovieComponent,
    data: {
      title: 'Edit Movie',
      loginRequired: true
    }
  },
  {
    path: 'catalog/delete/:movieId',
    resolve: {movie: MovieResolver} ,
    component: DeleteMovieComponent,
    data: {
      title: 'Delete',
      loginRequired: true
    }
  },
  {
    path: 'catalog/like/:movieId',
    resolve: {movie: MovieResolver} ,
    component: LikeComponent,
    data: {
      title: 'Like',
      loginRequired: true
    }
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
