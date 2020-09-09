import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SpringDataInt} from 'src/app/interfaces/spring-data-int';
import { SpringDataServService } from 'src/app/services/spring-data-serv.service';
import { CoilingServService } from 'src/app/services/coiling-serv.service';
import { GrindingServService } from 'src/app/services/grinding-serv.service';
import { ChamferingServService } from 'src/app/services/chamfering-serv.service';
import { SpccServService } from 'src/app/services/spcc-serv.service';
import { HpsServService } from 'src/app/services/hps-serv.service';
import { CoilingInt } from 'src/app/interfaces/coiling-int';
import { GrindingInt } from 'src/app/interfaces/grinding-int';
import { ChamferingInt } from 'src/app/interfaces/chamfering-int';
import { SpccInt } from 'src/app/interfaces/spcc-int';
import { HpsInt } from 'src/app/interfaces/hps-int';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  spring: SpringDataInt;
  coiling: CoilingInt;
  grinding: GrindingInt;
  chamfering: ChamferingInt;
  spcc: SpccInt;
  hps: HpsInt;
  constructor(private springService: SpringDataServService,
    private coilingService: CoilingServService,
    private grindingService: GrindingServService,
    private chamferingService: ChamferingServService,
    private spccService: SpccServService,
    private hpsService: HpsServService) {    
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.springService.getSpeccified(form.value.PartNo)
     .subscribe((data: SpringDataInt) => this.spring = data);  
     console.log(this.spring);
     

     this.coilingService.getSpeccified(form.value.PartNo)
     .subscribe((data: CoilingInt) => this.coiling = data);
     console.log(this.coiling);
     

     this.grindingService.getSpeccified(form.value.PartNo)
     .subscribe((data: GrindingInt) => this.grinding = data);
     console.log(this.grinding);

     this.chamferingService.getSpeccified(form.value.PartNo)
     .subscribe((data: ChamferingInt) => this.chamfering = data);
     console.log(this.chamfering);

     this.spccService.getSpeccified(form.value.PartNo)
     .subscribe((data: SpccInt) => this.spcc = data);
     console.log(this.spcc);

     this.hpsService.getSpeccified(form.value.PartNo)
     .subscribe((data: HpsInt) => this.hps = data);
     console.log(this.hps);
  }

}
