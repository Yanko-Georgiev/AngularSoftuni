import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './auth/core/footer/footer.component';
import { HeaderComponent } from './auth/core/header/header.component';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';
import { AuthenticatorComponent } from './authenticator/authenticator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AuthenticatorComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AuthenticatorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
