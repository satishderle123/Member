import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-grid',
  templateUrl: './member-grid.component.html',
  styleUrls: ['./member-grid.component.css']  
})
export class MemberGridComponent implements OnInit {
  
  public members = [];  //structure from interface member.ts 

  public errorMsg;

  constructor(private _memberService:MemberService) { }

  ngOnInit() {
    this._memberService.getMembers().subscribe(data => this.members  = data,  //Data or Error
                                              error => this.errorMsg = error);
  }

}