import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { Auth } from './interfaces/auth-int';
import { Router } from '@angular/router';
import { BackendLink } from './backend-link';

export interface UserDetails{
  id: number,
  FullName: string,
  EMPID: string,
  Passwd: string,
  exp: number,
  iat: number
}

interface TokenResponse {
  token: string
}

export interface TokenPayload {
  id: number,
  FullName: string,
  EMPID: string,
  Passwd: string
}

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private token: string
  _baseUrl = BackendLink;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string) : void {
    localStorage.setItem('userToken', token);
    this.token = token;
  }

  private getToken(): string{
    if(!this.token) {
      this.token = localStorage.getItem('userToken');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails{
    const token = this.getToken();
    let payload;
    if(token) {
      payload = token.split('.')[1];
      payload = window.atob(payload)
      return JSON.parse(payload);
    }else{
      return null;
    }
  }

  public isLoggedIn(): boolean{
    const user = this.getUserDetails()
    if(user) {
      return user.exp > Date.now() / 1000;
    }else{
      return false;
    }
  }

  public register(user: TokenPayload): Observable<any> {
    const base = this.http.post(this._baseUrl+'/users/register', user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token){
          this.saveToken(data.token)
        }
        return data;
      })
    )
    return request;
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(this._baseUrl+'/users/login', user)

    const request = base.pipe(
      map((data: TokenResponse) => {
        if(data.token){
          this.saveToken(data.token)
        }
        return data;
      })
    )
    return request;
  }

  public profile(): Observable<any>{
    return this.http.get(this._baseUrl+'/users/profile', {
      headers: {Authorization: `${this.getToken()}`}
    })
  }

  public logout(): void{
    this.token = '';
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/');
  }

  postRegister(auth: Auth){
    return this.http.post(this._baseUrl+'/users/register', auth);
  }

}
