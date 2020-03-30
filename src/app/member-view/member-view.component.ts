import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from  '@angular/forms';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent implements OnInit {
  memberViewFbForm : FormGroup;
  submitted = false;  
  
  constructor (private formbuilder: FormBuilder) { }

/* Initialize any Control here if any like this.cat="SC, ST, OBC, ...." */

ngOnInit() {
  this.memberViewFbForm =  this.formbuilder.group({
    MemNo: ['', [Validators.required, Validators.minLength(7),Validators.maxLength(7)]],
    RegNo: ['', [Validators.required]],
    MemberName: ['', [Validators.required, Validators.minLength(6)]], //Validators.name
    Addr1: ['', [Validators.required, Validators.minLength(6)]],
    Addr2: ['', [Validators.required, Validators.minLength(6)]],
    Village: ['', [Validators.required]], //Validators.name
    Taluka: ['', [Validators.required]], //Validators.name
    Corr1: ['', [Validators.required, Validators.minLength(6)]],
    Corr2: ['', [Validators.required, Validators.minLength(6)]],
    Centre: ['', [Validators.required, Validators.minLength(6)]],
    SubCentre: ['', [Validators.required, Validators.minLength(6)]],
    CentCode: ['', [Validators.required, Validators.minLength(6)]],
    Cent1: ['', [Validators.required, Validators.minLength(6)]],
    
    mMemberName: ['', [Validators.required, Validators.minLength(6)]], //Validators.name
    mAddr1: ['', [Validators.required, Validators.minLength(6)]],
    mAddr2: ['', [Validators.required, Validators.minLength(6)]],
    mVillage: ['', [Validators.required]], //Validators.name
    mTaluka: ['', [Validators.required]], //Validators.name
    mCorr1: ['', [Validators.required, Validators.minLength(6)]],
    mCorr2: ['', [Validators.required, Validators.minLength(6)]],
  })
 }

onSubmit() {
     this.submitted = true;
     console.log(this.memberViewFbForm.value);
  } //onSubmit

onReset() {
    this.submitted = false;
    this.memberViewFbForm.reset();
  }

} //main closing brace