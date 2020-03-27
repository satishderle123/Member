import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
//import { FormGroup,  FormControl } from '@angular/forms';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent implements OnInit {
  submitted = false;  
  
  constructor (private fb: FormBuilder) { }

  memberViewFbForm =  this.fb.group({
      MemNo: [''], // [Validators.required, Validators.minLength(7),Validators.maxLength(7)]],
      RegNo: [''], //[Validators.required]],
      MemberName: [''], //[Validators.required, Validators.minLength(6)],Validators.name],
      Addr1: [''], //[Validators.required, Validators.minLength(6)]],
      Addr2: [''], //[Validators.required, Validators.minLength(6)]],
      Village: [''], //[Validators.required, Validators.name]],
      });

/* Initialize any Control here if any like this.cat="SC, ST, OBC, ...." */
ngOnInit() {

}

onSubmit() {
     //this.submitted = true;
     alert(this.memberViewFbForm.value);
     console.log(this.memberViewFbForm.value);
     //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.memberViewFbForm.value))

     if (this.memberViewFbForm.invalid) {   /*Stop here if Form is invalid */
        return;
      }
  } //onSubmit

onReset() {
    this.submitted = false;
    this.memberViewFbForm.reset();
  }

} //main closing brace