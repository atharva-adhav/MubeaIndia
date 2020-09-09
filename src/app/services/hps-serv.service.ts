import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HpsInt } from '../interfaces/hps-int';
import { Observable } from 'rxjs';
import { BackendLink } from '../backend-link';


@Injectable({
  providedIn: 'root'
})
export class HpsServService {

  _baseUrl = BackendLink;

  constructor(private http: HttpClient) { }

  getAllHps(){
    return this.http.get<HpsInt>(this._baseUrl+'/hps/all');
  }

  getSpeccified(PartNo: string){    
    return this.http.get<HpsInt>(this._baseUrl+'/hps/find/'+PartNo);
  }

  postHps(hps: HpsInt){
    return this.http.post(this._baseUrl+'/hps/new', hps);
  }

  updateHps(hps: HpsInt){
    return this.http.put(this._baseUrl+'/hps/update', hps);
  }

  deleteHps(PartNo: string):Observable<any>{
    return this.http.delete(this._baseUrl+'/hps/delete/'+PartNo);
  }

}
