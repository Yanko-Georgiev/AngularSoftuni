import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { CoreModule } from './core/core.module';
import { MovieModule } from './movie/movie.module';
import { HttpClientModule } from '@angular/common/http';
import { AppInterceptor, appInterceptorProvider } from './app.interceptor';
import { BehaviorSubject } from 'rxjs';
import { API_ERROR } from './constants';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticatorComponent
    
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    MovieModule,
    HttpClientModule,
  ],
  exports: [
    AuthenticatorComponent,
  ],
  providers: [
    appInterceptorProvider,
    {
      provide: API_ERROR,
      useValue: new BehaviorSubject(null)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
