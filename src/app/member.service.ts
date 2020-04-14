import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMember } from './members';
import { Observable, observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class MemberService {

  private _url: string = "/assets/data/memberTable.json";

  constructor(private http:HttpClient) { }

  
  getMembers(): Observable<IMember[]>{
    return this.http.get<IMember[]>(this._url)
                    .catch(this.errorHandler);
  }

  errorHandler(error:HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
      
  }
}
