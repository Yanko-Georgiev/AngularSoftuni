import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { appEmailValidator, sameValueGroupValidator } from 'src/app/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required,Validators.minLength(5)]],
    email: ['',[Validators.required, appEmailValidator(['bg','com'])]],
    pass: this.fb.group({
      password: ['',[Validators.required, Validators.minLength(5)]],
      rePassword: []
    },{
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })
  })

  constructor(private fb: FormBuilder,private authService: AuthService, private router: Router){}

  RegisterHandler() {
    const {username,email,pass:{password,rePassword}={}}=this.form.value;
    this.authService.register(username!,email!,password!,rePassword!)
    .subscribe(user=>{
      this.router.navigate(['/'])
    })
  }

}
