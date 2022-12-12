import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, filter, Subscription, tap } from 'rxjs';
import { IUser } from '../interfaces/user';
import { environment } from 'src/environments/environments';

const apiUrl=environment.apiURL;

@Injectable({
  providedIn: 'root'
})


export class AuthService implements OnDestroy{

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$=this.user$$.asObservable().pipe(filter((val): val is IUser|null => val != undefined));

  user: IUser | null= null;

  get isLoggedIn(){ 
    return this.user != null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) { 
    this.subscription = this.user$.subscribe(user=>{
      this.user=user
    })
  }
  
  register(username: string, email: string, password: string, rePassword: string, tel?: string){
    return this.http.post<IUser>(`${apiUrl}/register`, { username,email,password,rePassword,tel})
    .pipe(tap(user=>this.user$$.next(user)))
  }
  
  login(email: string, password: string){
    return this.http.post<any>(`${apiUrl}/login`, { email,password})
    .pipe(tap(user=>this.user$$.next(user)))
  }
  
  logout(){
    return this.http.post<void>(`${apiUrl}/logout`,{})
    .pipe(tap(()=>this.user$$.next(null)))
  }
  
  getProfile(){
    return this.http.get<IUser>(`${apiUrl}/api/users/profile`)
    .pipe(tap(user=>this.user$$.next(user)))
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
