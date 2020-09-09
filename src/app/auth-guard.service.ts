import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataserviceService } from './dataservice.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: DataserviceService, private router: Router) { }

  canActivate(){
    if(!this.auth.isLoggedIn()){
      this.router.navigateByUrl('/')
      return false;
    }
    return true;
  }
}
