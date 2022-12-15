import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
      path : 'login',
      component: LoginComponent,
      data: {
        title: 'Login',
      }
    },
    {
      path: 'register',
      component: RegisterComponent,
      data: {
        title: 'Register',
      }
    },
    {
      path: 'logout',
      component: LogoutComponent,
      data: {
        title: 'Logout',
      }
    },
    {
      path: 'profile',
      component: ProfileComponent,
      data: {
        title: 'Profile',
      }
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }