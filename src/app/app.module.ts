import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component'
const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"addemployee",
    component:AddemployeeComponent
  },
  {
    path:"viewemployee",
    component:ViewEmployeeComponent
  },
  {
    path:"searchemployee",
    component:SearchEmployeeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AddemployeeComponent,
    AdminnavbarComponent,
    ViewEmployeeComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
