import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChamferingServService } from 'src/app/services/chamfering-serv.service';
import { CoilingServService } from 'src/app/services/coiling-serv.service';
import { GrindingServService } from 'src/app/services/grinding-serv.service';
import { HpsServService } from 'src/app/services/hps-serv.service';
import { SpringDataServService } from 'src/app/services/spring-data-serv.service';
import { SpccServService } from 'src/app/services/spcc-serv.service';
import { ProductionNosServService } from 'src/app/services/production-nos-serv.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  message = null;

  constructor(private chamferingService: ChamferingServService,
    private coilingService: CoilingServService,
    private grindingService: GrindingServService,
    private hpsService: HpsServService,
    private springService: SpringDataServService,
    private spccService: SpccServService,
    private productionService: ProductionNosServService) { }

  ngOnInit(): void {
  }

  delete(form: NgForm){
    if(form.value.appsel == 0){
      this.springService.deleteSpring(form.value.PartNo)
      .subscribe(data => this.message = data);
      //console.log(this.message);
      //this.message = [{}];    
    }else if(form.value.appsel == 1){
      this.coilingService.deleteCoiling(form.value.PartNo)
      .subscribe(data => this.message = data);

    }else if(form.value.appsel == 2){
      this.grindingService.deleteGrinding(form.value.PartNo)
      .subscribe(data => this.message = data);

    }else if(form.value.appsel == 3){
      this.chamferingService.deleteChamfering(form.value.PartNo)
      .subscribe(data => this.message = data);

    }else if(form.value.appsel == 4){
      this.spccService.deleteSpcc(form.value.PartNo)
      .subscribe(data => this.message = data);

    }else if(form.value.appsel == 5){
      this.hpsService.deleteHps(form.value.PartNo)
      .subscribe(data => this.message = data);

    }else if(form.value.appsel == 6){
      this.productionService.deleteProduction(form.value.PartNo)
      .subscribe(data => setTimeout(() => {
        this.message = data;
      }));
    }
    console.log(this.message);
  }
}
