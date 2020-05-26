
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberHomeComponent } from './member-home/member-home.component';
import { MemberViewComponent } from './member-view/member-view.component';
import { MemberReportsComponent } from './member-reports/member-reports.component';
import { MemberGridComponent } from './member-grid/member-grid.component';
import { MemberAboutComponent} from './member-about/member-about.component';

const routes: Routes = [
  { //Please note, This is the Child Routing of Auth Module in addition to following modules.
    path:  'auth', loadChildren:  './auth/auth.module#AuthModule'
  },

  {
    path: '',           //To load by default, keep it empty
    component: MemberHomeComponent,
    data: { title: 'Home' }
  },

  {
    path: 'member-view',
    component: MemberViewComponent,
    data: { title: 'Member Master' }
  },

  {
    path: 'member-grid',
    component: MemberGridComponent,
    data: { title: 'Grids Reports' }
  },

  {
    path: 'member-reports',
    component: MemberReportsComponent,
    data: { title: 'Reports' }
  },

  {
    path: 'member-about',
    component: MemberAboutComponent,
    data: { title: 'About Info.' }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
