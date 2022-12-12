import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
      path : 'login',
      component: LoginComponent,
    //   canActivate: [AuthActivate],
      data: {
        title: 'Login',
        // loginRequired: false
      }
    },
    {
      path: 'register',
      component: RegisterComponent,
    //   canActivate: [AuthActivate],
      data: {
        title: 'Register',
        // loginRequired: false
      }
    },
    {
      path: 'logout',
      component: LogoutComponent,
    //   canActivate: [AuthActivate],
      data: {
        title: 'Logout',
        loginRequired: true
      }
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }