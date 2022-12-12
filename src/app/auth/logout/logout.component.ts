import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router:Router){
    this.authService.logout().subscribe({
      next:()=>{
        authService.user=null;
        router.navigate(['/login'])
      },
      error:()=>{
        authService.user=null;
        router.navigate(['/login'])
      }
    })
  }

}
