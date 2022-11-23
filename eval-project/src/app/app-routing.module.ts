import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { AngularComponent } from './components/angular/angular.component';
import { ContactComponent } from './components/contact/contact.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ReactComponent } from './components/react/react.component';
import { VuejsComponent } from './components/vuejs/vuejs.component';
import { DashboardGuard } from './guard/dashboard.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"courses",component:CoursesComponent,children:[
    {path:"angular",component:AngularComponent},
    {path:"react",component:ReactComponent},
    {path:"vuejs",component:VuejsComponent}
  ]},
  {path:"contact",component:ContactComponent},
  {path:"admin",component:AdminComponent},
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[DashboardGuard] },

  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
