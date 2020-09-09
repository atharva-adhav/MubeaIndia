import { Injectable } from '@angular/core';
import { Productionnos } from '../interfaces/productionnos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import { BackendLink } from '../backend-link';

@Injectable({
  providedIn: 'root'
})
export class ProductionNosServService {

  _baseUrl = BackendLink;

  constructor(private http: HttpClient) { }
  
  getAllProduction(){
    return this.http.get<Productionnos>(this._baseUrl+'/production/all');
  }

  getOneProduction(PartNo: string){
    return this.http.get<Productionnos>(this._baseUrl+'/production/find/:'+PartNo)
  }

  deleteProduction(PartNo: string):Observable<any>{
    return this.http.delete(this._baseUrl+'/production/delete/'+PartNo);
  }

  pushOneProduction(production: Productionnos){
    return this.http.post<Productionnos>(this._baseUrl+'/production/new', production);
  }

  //Under Testing Avoid to use it.
  updateOneProduction(production: Productionnos){
    return this.http.put<Productionnos>(this._baseUrl+'/production/edit', production);
  }

  deleteOneProduction(PartNo: string){
    return this.http.delete(this._baseUrl+'/production/delete/:'+PartNo);
  }
  

}
