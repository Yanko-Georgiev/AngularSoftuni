import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-authenticator',
  templateUrl: './authenticator.component.html',
  styleUrls: ['./authenticator.component.scss']
})
export class AuthenticatorComponent implements OnInit{
  
  isAuth=true
  constructor( private authService: AuthService){ }
  
  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: ()=>{
        this.isAuth=false
      },
      error: ()=>{
        this.isAuth=false
      }
    })
  }

}
