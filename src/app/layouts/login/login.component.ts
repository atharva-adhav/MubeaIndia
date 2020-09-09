import { Component, OnInit } from '@angular/core';
import { Productionnos } from 'src/app/interfaces/productionnos';
import { ProductionNosServService } from 'src/app/services/production-nos-serv.service';
import { NgForm } from '@angular/forms';
import { Auth } from 'src/app/interfaces/auth-int';
import { TokenPayload, DataserviceService } from 'src/app/dataservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: TokenPayload = {
    id: 0,
    FullName: '',
    EMPID: '',
    Passwd:''
  };

  err: any;

  constructor(public dataservice: DataserviceService, private router: Router) {
    if(!dataservice.getUserDetails()?.EMPID){
      router.navigateByUrl('/login');
    }
  }

  ngOnInit(): void {
  }

  login(form: NgForm){
    this.user = form.value;
    this.dataservice.login(this.user).subscribe(
      () => {
        localStorage.clear();
        this.router.navigateByUrl('/profile');
      },
      err => {
        this.err = err;
        console.log(err.message);
      }
    )
  }
}
