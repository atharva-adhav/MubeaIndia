import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpccInt } from '../interfaces/spcc-int';
import { Observable } from 'rxjs';
import { BackendLink } from '../backend-link';

@Injectable({
  providedIn: 'root'
})
export class SpccServService {

  _baseUrl = BackendLink;

  constructor(private http: HttpClient) { }

  getAllSpcc(){
    return this.http.get<SpccInt>(this._baseUrl+'/spcc/all');
  }

  getSpeccified(PartNo: string){    
    return this.http.get<SpccInt>(this._baseUrl+'/spcc/find/'+PartNo);
  }

  deleteSpcc(PartNo: string):Observable<any>{
    return this.http.delete(this._baseUrl+'/spcc/delete/'+PartNo);
  }

  postSpcc(spcc: SpccInt){
    return this.http.post(this._baseUrl+'/spcc/new', spcc);
  }

}
