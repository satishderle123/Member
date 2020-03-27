import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberHomeComponent } from './member-home/member-home.component';
import { MemberViewComponent } from './member-view/member-view.component';
import { MemberReportsComponent } from './member-reports/member-reports.component';
import { MemberGridComponent } from './member-grid/member-grid.component';
import { MemberAboutComponent } from './member-about/member-about.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberHomeComponent,
    MemberViewComponent,
    MemberReportsComponent,
    MemberGridComponent,
    MemberAboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
