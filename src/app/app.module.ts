import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberHomeComponent } from './member-home/member-home.component';
import { MemberViewComponent } from './member-view/member-view.component';
import { MemberReportsComponent } from './member-reports/member-reports.component';
import { MemberGridComponent } from './member-grid/member-grid.component';
import { MemberAboutComponent } from './member-about/member-about.component';
import { MemberService } from './member.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MemberHomeComponent,
    MemberViewComponent,
    MemberReportsComponent,
    MemberGridComponent,
    MemberAboutComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],

  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }