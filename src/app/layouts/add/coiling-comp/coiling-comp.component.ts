import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoilingInt } from 'src/app/interfaces/coiling-int';
import { CoilingServService } from 'src/app/services/coiling-serv.service';

@Component({
  selector: 'app-coiling-comp',
  templateUrl: './coiling-comp.component.html',
  styleUrls: ['./coiling-comp.component.css']
})
export class CoilingCompComponent implements OnInit {

  coiling: CoilingInt;
  result: any;

  constructor(private coilingService: CoilingServService) { }

  ngOnInit(): void {
  }

  AddCoiling(form: NgForm){
    console.log(form.value);
    this.coiling = form.value;
    this.coilingService.postCoiling(this.coiling)
    .subscribe((data: any) => setTimeout(()=>{
      this.result = data;
      console.log(this.result);
      form.reset();
    }));
  }

  Update(form: NgForm){
    form.controls['PartNo'].disable();
  }

}
