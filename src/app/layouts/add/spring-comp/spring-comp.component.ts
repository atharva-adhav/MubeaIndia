import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpringDataServService } from 'src/app/services/spring-data-serv.service';
import { SpringDataInt } from 'src/app/interfaces/spring-data-int';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-spring-comp',
  templateUrl: './spring-comp.component.html',
  styleUrls: ['./spring-comp.component.css']
})
export class SpringCompComponent implements OnInit {

  spring: SpringDataInt;
  result: any = null;

  constructor(private springService: SpringDataServService) { }

  ngOnInit(): void {
  }

  AddSpring(form: NgForm){
    this.spring = form.value;
    this.springService.postSpring(this.spring)
    .subscribe((data: SpringDataInt) => setTimeout(() =>{
      this.result = data;
      console.log(this.result);
      form.reset();
    }, 3000));
    console.log(this.result.PartNo);
  }
   Update(form: NgForm){

   }

}
