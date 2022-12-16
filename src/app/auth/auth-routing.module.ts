import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthActivate } from "../guard/auth.activate";
import { LoggedActivate } from "../guard/logged.activate";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
      path : 'login',
      component: LoginComponent,
      canActivate:[LoggedActivate],
      data: {
        title: 'Login',
        loginRequired: false
      }
    },
    {
      path: 'register',
      canActivate:[LoggedActivate],
      component: RegisterComponent,
      data: {
        title: 'Register',
        loginRequired: false
      }
    },
    {
      path: 'logout',
      canActivate:[AuthActivate],
      component: LogoutComponent,
      data: {
        title: 'Logout',
        loginRequired: true
      }
    },
    {
      path: 'profile',
      canActivate:[AuthActivate],
      component: ProfileComponent,
      data: {
        title: 'Profile',
        loginRequired: true
      }
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }