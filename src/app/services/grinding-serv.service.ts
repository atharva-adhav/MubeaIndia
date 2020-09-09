import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrindingInt } from '../interfaces/grinding-int';
import { Observable } from 'rxjs';
import { BackendLink } from '../backend-link';

@Injectable({
  providedIn: 'root'
})
export class GrindingServService {

  _baseUrl = BackendLink;

  constructor(private http: HttpClient) { }

  getAllGrinding(){
    return this.http.get<GrindingInt>(this._baseUrl+'/grinding/all');
  }

  getSpeccified(PartNo: string){    
    return this.http.get<GrindingInt>(this._baseUrl+'/grinding/find/'+PartNo);
  }

  deleteGrinding(PartNo: string):Observable<any>{
    return this.http.delete(this._baseUrl+'/grinding/delete/'+PartNo);
  }

  postGrinding(data: GrindingInt){
    return this.http.post(this._baseUrl+'/grinding/new',data);
  }

}
