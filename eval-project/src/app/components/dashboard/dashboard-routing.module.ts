import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { DashboardComponent } from './dashboard.component';
import { SlidesComponent } from './slides/slides.component';
import { TechComponent } from './tech/tech.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: DashHomeComponent },
  { path: 'slids', component: SlidesComponent },
  { path: 'technology', component:TechComponent},
  { path: 'users', component:UsersComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
