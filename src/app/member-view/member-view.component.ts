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