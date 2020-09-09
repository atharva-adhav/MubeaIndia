import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpringDataInt } from '../interfaces/spring-data-int';
import { Observable } from 'rxjs';
import { BackendLink } from '../backend-link';

@Injectable({
  providedIn: 'root'
})
export class SpringDataServService {

  _baseUrl = BackendLink;

  constructor(private http: HttpClient) { }

  getAllSpringData(){
    return this.http.get<SpringDataInt>(this._baseUrl+'/springdata/all');
  }

  getSpeccified(PartNo: string){    
    return this.http.get<SpringDataInt>(this._baseUrl+'/springdata/find/'+PartNo);
  }

  deleteSpring(PartNo: string):Observable<any>{
    return this.http.delete(this._baseUrl+'/springdata/delete/'+PartNo);
  }

  postSpring(data: SpringDataInt){
    return this.http.post<SpringDataInt>(this._baseUrl+'/springdata/new', data);
  }

}
