import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoilingInt } from '../interfaces/coiling-int';
import { Observable } from 'rxjs';
import { BackendLink } from '../backend-link';

@Injectable({
  providedIn: 'root'
})
export class CoilingServService {

  _baseUrl = BackendLink;

  constructor(private http: HttpClient) { }

  getAllCoiling(){
    return this.http.get<CoilingInt>(this._baseUrl+'/coiling/all');
  }

  getSpeccified(PartNo: string){    
    return this.http.get<CoilingInt>(this._baseUrl+'/coiling/find/'+PartNo);
  }

  deleteCoiling(PartNo: string): Observable<any>{
    return this.http.delete(this._baseUrl+'/coiling/delete/'+PartNo);
  }

  postCoiling(data: CoilingInt): Observable<any>{
    return this.http.post<CoilingInt>(this._baseUrl+'/coiling/new/',data);
  }

}
