import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-grid',
  templateUrl: './member-grid.component.html',
  styleUrls: ['./member-grid.component.css']
})
export class MemberGridComponent implements OnInit {
  
  public members = [];
  constructor(private _memberService:MemberService) { }

  ngOnInit() {
    this.members = this._memberService.getMembers();
  }

}
