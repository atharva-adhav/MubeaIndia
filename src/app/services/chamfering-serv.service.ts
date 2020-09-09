import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChamferingInt } from '../interfaces/chamfering-int';
import {Observable } from 'rxjs';
import { BackendLink } from '../backend-link';

@Injectable({
  providedIn: 'root'
})
export class ChamferingServService {

  _baseUrl = BackendLink;
  
  constructor(private http: HttpClient) { }
  getAllChamfering(){
    return this.http.get<ChamferingInt>(this._baseUrl+'/chamfering/all');
  }

  getSpeccified(PartNo: string){    
    return this.http.get<ChamferingInt>(this._baseUrl+'/chamfering/find/'+PartNo);
  }

  deleteChamfering(PartNo: string):Observable<any>{
    return this.http.delete(this._baseUrl+'/chamfering/delete/'+PartNo);
  }

  posetChamfering(chamfering: ChamferingInt){
    return this.http.post(this._baseUrl+'/chamfering/new', chamfering);
  }


}
