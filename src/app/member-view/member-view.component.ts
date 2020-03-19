import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent  {
  memberViewForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.memberViewForm = this.fb.group({
        MemberName: ['', [Validators.required, Validators.minLength(6)],Validators.name],
        MemNo: ['', [Validators.required, Validators.minLength(7),Validators.maxLength(7)]],
        RegNo: ['', [Validators.required]],
        Addr1: ['', [Validators.required, Validators.minLength(6)]],
        Addr2: ['', [Validators.required, Validators.minLength(6)]],
        Village: ['', [Validators.required, Validators.name]],
    },);
}

onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.memberViewForm.invalid) {
        return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.memberViewForm.value))
} //onSubmit


} //main closing brace
