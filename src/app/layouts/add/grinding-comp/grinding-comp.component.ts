import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GrindingServService } from 'src/app/services/grinding-serv.service';
import { GrindingInt } from 'src/app/interfaces/grinding-int';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Component({
  selector: 'app-grinding-comp',
  templateUrl: './grinding-comp.component.html',
  styleUrls: ['./grinding-comp.component.css']
})
export class GrindingCompComponent implements OnInit {

  grinding: GrindingInt;
  result: any;

  constructor(private grindingService: GrindingServService) { }

  ngOnInit(): void {
  }

  AddGrinding(form: NgForm){
    this.grinding = form.value;
    console.log(form.value);
    console.log(this.grinding);
    
    this.grindingService.postGrinding(this.grinding)
    .subscribe((data: GrindingInt) => setTimeout(()=>{
      this.result = data;
      console.log(this.result);
      form.reset();
    }, 3000));
  }

  Update(form: NgForm){

  }

}
