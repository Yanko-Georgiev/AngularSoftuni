import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogComponent,
    AddMovieComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MovieModule { }
