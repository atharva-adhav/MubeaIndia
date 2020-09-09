import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SpccInt } from 'src/app/interfaces/spcc-int';
import { SpccServService } from 'src/app/services/spcc-serv.service';

@Component({
  selector: 'app-spcc-comp',
  templateUrl: './spcc-comp.component.html',
  styleUrls: ['./spcc-comp.component.css']
})
export class SpccCompComponent implements OnInit {

  spcc: SpccInt = null;
  result: any;

  constructor(private spccService: SpccServService) { }

  ngOnInit(): void {
  }

  AddSPCC(form: NgForm){
    console.log(form.value);
    this.spcc = form.value;
    this.spccService.postSpcc(this.spcc)
    .subscribe((data: any) => setTimeout(() => {
      this.result = data;
      console.log(this.result);
      form.reset();
    }));
  }

  Update(form: NgForm){

  }

}
