import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: DataserviceService) { }

  ngOnInit(): void {
  }

  login(){
    alert("Login Unsuccessful!!");
  }

}
