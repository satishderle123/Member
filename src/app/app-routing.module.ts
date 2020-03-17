import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberViewComponent } from './member-view/member-view.component';
import { MemberReportsComponent } from './member-reports/member-reports.component';
import { MemberGridComponent } from './member-grid/member-grid.component';
import { MemberAboutComponent} from './member-about/member-about.component';

const routes: Routes = [
  {
    path: 'member-view',
    component: MemberViewComponent,
    data: { title: 'Member Master' }
  },
  {
    path: 'member-reports',
    component: MemberReportsComponent,
    data: { title: 'Reports' }
  },
  {
    path: 'member-grid',
    component: MemberGridComponent,
    data: { title: 'Grids' }
  },
  {
    path: 'member-about',
    component: MemberAboutComponent,
    data: { title: 'About' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }