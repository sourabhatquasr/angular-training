import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { SlidesComponent } from './slides/slides.component';
import { TechComponent } from './tech/tech.component';
import { DashHeaderComponent } from './dash-header/dash-header.component';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    SlidesComponent,
    TechComponent,
    DashHeaderComponent,
    DashHomeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class DashboardModule { }
