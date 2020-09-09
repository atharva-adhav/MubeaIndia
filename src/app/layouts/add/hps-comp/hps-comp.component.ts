import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HpsInt } from 'src/app/interfaces/hps-int';
import { HpsServService } from 'src/app/services/hps-serv.service';

@Component({
  selector: 'app-hps-comp',
  templateUrl: './hps-comp.component.html',
  styleUrls: ['./hps-comp.component.css']
})
export class HpsCompComponent implements OnInit {

  hps: HpsInt = null;
  result: any;

  constructor(private hpsService: HpsServService) { }

  ngOnInit(): void {
  }

  AddHps(form: NgForm){
    console.log(form.value);
    this.hps = form.value;
    this.hpsService.postHps(this.hps)
    .subscribe((data: any) => setTimeout(() => {
      this.result = data;
      console.log(this.result);
      form.reset();
    }));
  }

  Update(form: NgForm){

  }

}
