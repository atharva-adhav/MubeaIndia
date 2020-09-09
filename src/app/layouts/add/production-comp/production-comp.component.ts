import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Productionnos } from 'src/app/interfaces/productionnos';
import { ProductionNosServService } from 'src/app/services/production-nos-serv.service';

@Component({
  selector: 'app-production-comp',
  templateUrl: './production-comp.component.html',
  styleUrls: ['./production-comp.component.css']
})
export class ProductionCompComponent implements OnInit {

  constructor(private productionService: ProductionNosServService) { }

  production: Productionnos;
  result: any;
  Uresult: any;

  ngOnInit(): void {
  }

  AddProduction(form: NgForm){
    this.production = form.value;
    console.log(this.production);
    this.productionService.pushOneProduction(this.production)
    .subscribe((data: any) => this.result = {...data});
    form.reset();
  }

  Update(form: NgForm){
    this.production = null;
    this.production = form.value;
    this.productionService.updateOneProduction(this.production)
    .subscribe((data: any) => this.Uresult = {...data});
    console.log(this.Uresult);
    
  }

  loadData(form: NgForm){
    
  }

}
