import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }

  getMembers() {
    return [
      {"id": "1001", "name": "Pawar Kashinath Popat", "age": "85" },
      {"id": "1002", "name": "Dhikale Damodar Kisan", "age": "53" },
      {"id": "1003", "name": "Patil Bhika Nathu",     "age": "70" },
      {"id": "1004", "name": "Raje Shirish Subhash",  "age": "73" },
      {"id": "1005", "name": "Bhamare Tukaram Vithal","age": "50" }
    ]
  }
}
