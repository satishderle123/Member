import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from  '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-view',
  templateUrl: './member-view.component.html',
  styleUrls: ['./member-view.component.css']
})
export class MemberViewComponent implements OnInit {
  memberViewFbForm : FormGroup;
  submitted = false;  

  deadOptions=[
    {id:1, text:'N'},
    {id:2, text:'Y'},
    {id:3, text:'Q'}
  ]
  selection:number=1;

  private _url: string = "http://localhost:5709/api/memmast";  //Database URL

  constructor (private formbuilder: FormBuilder, private httpClient: HttpClient ) { }

/* Initialize any Control here if any like this.cat="SC, ST, OBC, ...." */
  
ngOnInit() {
  this.memberViewFbForm =  this.formbuilder.group({
    MemNo: ['', [Validators.required, Validators.minLength(7),Validators.maxLength(7)]],
    RegNo: ['', [Validators.required]],
    Name: ['', [Validators.required, Validators.minLength(6)]], //Validators.name
    Dead: ['N', [Validators.required]],
    MobileNo: ['', [Validators.required]],
    Sex: ['M', [Validators.required]],
    BirthDate: ['15/12/1973', [Validators.required]],
    //PermAddress:this.formbuilder.group({
    Addr1: ['', [Validators.required, Validators.minLength(6)]],
    Addr2: [''],
    Village: ['', [Validators.required]], //Validators.name
    Tal: ['', [Validators.required]], //Validators.name
    //CorrAddress:this.formbuilder.group({
    Corr1: [''],
    Corr2: [''],    
    mName: ['', [Validators.required, Validators.minLength(6)]], //Validators.name
    mAddr1: ['', [Validators.required, Validators.minLength(6)]],
    mAddr2: [''],
    mVillage: ['', [Validators.required]], //Validators.name
    mTal: ['', [Validators.required]], //Validators.name
    mCorr1: [''],
    mCorr2: [''],
    Cent_Code: ['', [Validators.required, Validators.minLength(1)]],
    Centre: ['', [Validators.required, Validators.minLength(6)]],
    Cent_SubCode: ['', [Validators.required, Validators.minLength(3)]],
    Cent_SubCentre: ['', [Validators.required, Validators.minLength(6)]],
    Cent_VilCode: ['', [Validators.required, Validators.minLength(4)]],
    Remark: [''],  
  })
  //this.dead="Yes, NO";
  //this.sex="Male, Female";
 }

onSubmit() {
     this.submitted = true;
     //This is POST logic called from Server.js
     this.httpClient.post<any>(this._url, this.memberViewFbForm.value).subscribe(
                                                                          (res) => console.log(res),
                                                                          (err) => console.log(err));

     console.log(this.memberViewFbForm.value);
  } //onSubmit

onReset() {
    this.submitted = false;
    this.memberViewFbForm.reset();  
  }

searchMember() {
  //Logic for Searching member by MemNo/Name/MobileNo
  //this.memberViewFbForm.get()
   console.log('Searching Member');
}


} //main closing brace