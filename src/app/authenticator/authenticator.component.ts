import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.scss']
})
export class AuthenticatorComponent implements OnInit{
  
  constructor( private authService: AuthService){ }
  
  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (user)=>{
        this.authService.user=user;
      },
      error: (user)=>{
        this.authService.user=user;
      }
    })
  }

}
