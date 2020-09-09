import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataserviceService, TokenPayload } from 'src/app/dataservice.service';
import { Auth } from 'src/app/interfaces/auth-int';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  err: any;
  user: TokenPayload = {
    id: 0,
    FullName: '',
    EMPID: '',
    Passwd: ''
  };

  constructor(private dataService: DataserviceService, private router: Router) { }

  ngOnInit(): void {

  }

  register(form: NgForm){
    this.user = form.value;
    this.dataService.register(this.user).subscribe(
      () => {
        console.log(this.user);
        this.router.navigateByUrl('/home');        
      },
      err => {
        this.err = err;
        console.error(err)
      }
    );
    /*this.dataService.postRegister(this.auth)
    .subscribe((data: any) => setTimeout(() =>{
      this.result = data;
    }));*/
  }
}
