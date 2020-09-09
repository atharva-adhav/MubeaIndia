import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoilingInt } from 'src/app/interfaces/coiling-int';
import { Productionnos } from 'src/app/interfaces/productionnos';
import { ProviderAstType } from '@angular/compiler';
import { ProductionNosServService } from 'src/app/services/production-nos-serv.service';
import { CoilingServService } from 'src/app/services/coiling-serv.service';
import { SpringDataServService } from 'src/app/services/spring-data-serv.service';
import { GrindingServService } from 'src/app/services/grinding-serv.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  constructor(private productionService: ProductionNosServService,
    private coilingService: CoilingServService,
    private springService: SpringDataServService,
    private grindingService: GrindingServService) { }

  coiling: CoilingInt;
  production: Productionnos ;

  ngOnInit(): void {
  }

  AddSpring(form: NgForm){
    console.log(form);
    form.reset();
  }

  AddGrinding(form: NgForm){
    console.log(form);
    form.reset();
  }

  AddCoiling(form: NgForm){    
    this.coiling = form.value;
    this.coiling.OEM = form.value.Coem;
    this.coiling.PartNo = form.value.CpartNo;
    this.coiling.PartName = form.value.Cpartname;
    this.coiling.WireDiameter = form.value.Cwirediameter;
    this.coiling.Process = form.value.Cprocess;
    this.coiling.WGCoilingMachine = form.value.Ccoilingmachine;
    this.coiling.CoilingSpeed = form.value.Ccoilingspeed;
    this.coiling.Loc = form.value.Cloc;
    this.coiling.IdC = form.value.Cidc;
    this.coiling.OdC = form.value.Codc;
    this.coiling.KEBPnt = form.value.Cnt;
    this.coiling.KEBPntQuant = form.value.Cntquant;
    this.coiling.KEBPIDMandrel = form.value.Cidmandrel;
    this.coiling.KEBPIDMandrelQuant = form.value.Cidmandrelquant;
    this.coiling.KEBPODBush = form.value.Codbush;
    this.coiling.KEBPODBushQuant = form.value.Codbushquant;
    this.coiling.KEBPLengthM = form.value.ClengthM;
    this.coiling.LengthMQuant = form.value.Clengthmquant;
    this.coiling.KEBPPitchTool = form.value.Cpitchtool;
    this.coiling.KEBPPitchToolQuant = form.value.Cpitchtoolquant;
    this.coiling.KEBPImessBushLo = form.value.CimessLobush;
    this.coiling.KEBPImessBushOD = form.value.CimessODbush;
    this.coiling.KEBPImessBushQuant = form.value.Cimessquant;
    this.coiling.WGENFeedRoller = form.value.Cfeedroller;
    this.coiling.WGENFRQuant = form.value.Cfeedquant;
    this.coiling.ENCutterInserts = form.value.Ccutterinserts;
    this.coiling.ENCIQuant = form.value.Ccutterquant;
    this.coiling.ENCoilingMandrel = form.value.Ccoilingmandrel;
    this.coiling.ENCMQuant = form.value.Ccoilingmandrelquant;
    this.coiling.WTHGWireGuide = form.value.Cwireguide;
    this.coiling.WTHGWGQuant = form.value.Cwireguidequant;
    this.coiling.CoilingPin = form.value.Ccoilingpin;
    this.coiling.KEBPCuttingKnifel = form.value.Ccuttingknifel;
    this.coiling.KEBPPitchTooll = form.value.Cpitchtooll;
    this.coiling.temprature = form.value.Ctemp;
    this.coiling.MMXGQuant = form.value.Cxgquant;
    this.coiling.MMXGL1 = form.value.Cl1;
    this.coiling.MMXGL2 = form.value.Cl2;
    this.coiling.MMXGLTotal = form.value.Cltotal;
    this.coiling.MMXGOD1 = form.value.Cod1;
    this.coiling.MMXGOD2 = form.value.Cod2;
    this.coiling.MMXGOD3 = form.value.Cod3;
    this.coiling.upto = new Date();

    this.coilingService.postCoiling(this.coiling)
    .subscribe((data: CoilingInt) => this.coiling = data);

    alert("added new data of : "+this.coiling.PartNo);

    form.reset();
  }

  AddChamfering(form: NgForm){
    console.log(form.value);
    form.reset();
  }

  AddSPCC(form: NgForm){
    console.log(form);
    form.reset();
  }

  AddProduction(form: NgForm){
    console.log(form.value.Rcustomer);
    this.production = form.value;    
    this.production.Customer = form.value.Rcustomer;
    this.production.PartName = form.value.Rpartname;
    this.production.PartNo = form.value.Rpartno;
    this.production.s2019 = form.value.Rs2019;
    this.production.s2020 = form.value.Rs2020;
    this.production.s2021 = form.value.Rs2021;
    this.production.s2022 = form.value.Rs2022;
    this.production.s2023 = form.value.Rs2023;



    console.log(this.production);
    
    
    form.reset();
  }

  AddHps(form: NgForm){
    console.log(form);
    form.reset();
  }

}
