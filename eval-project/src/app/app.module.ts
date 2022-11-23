import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialModule } from './module/material/material.module';
import { AngularComponent } from './components/angular/angular.component';
import { ReactComponent } from './components/react/react.component';
import { VuejsComponent } from './components/vuejs/vuejs.component';
import { BannerComponent } from './components/banner/banner.component';
import { TopicComponent } from './components/topic/topic.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AngularComponent,
    ReactComponent,
    VuejsComponent,
    BannerComponent,
    TopicComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
