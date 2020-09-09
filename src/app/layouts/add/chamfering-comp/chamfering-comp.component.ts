import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChamferingInt } from 'src/app/interfaces/chamfering-int';
import { ChamferingServService } from 'src/app/services/chamfering-serv.service';

@Component({
  selector: 'app-chamfering-comp',
  templateUrl: './chamfering-comp.component.html',
  styleUrls: ['./chamfering-comp.component.css']
})
export class ChamferingCompComponent implements OnInit {

  chamfering: ChamferingInt = null;
  result: any;

  constructor(private chamferingService: ChamferingServService) { }

  ngOnInit(): void {
  }

  AddChamfering(form: NgForm){
    console.log(form.value);
    this.chamfering = form.value;
    this.chamferingService.posetChamfering(this.chamfering)
    .subscribe((data: any) => setTimeout(() =>{
      this.result = data;
      console.log(this.result);
      form.reset();
    }));    
  }

  Update(form: NgForm){

  }

}
