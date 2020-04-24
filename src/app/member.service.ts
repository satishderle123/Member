import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMember } from './members';
import { Observable, observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MemberService {

//private _url: string = "/assets/data/memmast1.json";        //JSON for trial check, acts as Database
private _url: string = "http://localhost:5709/api/memmast";  //Database URL

  constructor(private http:HttpClient) { }
  
  getMembers(): Observable<IMember[]>{
    return this.http.get<IMember[]>(this._url)
                    .catch(this.errorHandler);
  }

  errorHandler(error:HttpErrorResponse){
      return Observable.throw(error.message || "Server Error");
      
  }
}