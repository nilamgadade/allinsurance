import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
// import { FirstComponent } from './datacommunication/first/first.component';
// import { ParentComponent } from './datacommunication/parent/parent.component';
// import { SecondComponent } from './datacommunication/second/second.component';
import { SampletestComponent } from './sampletest/sampletest.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'staff', component: StaffComponent},
  {path:'stud', component: StudentComponent},
  {path:'contact', component: ContactusComponent},
  {path:'**', component: ErrorComponent},
  {path:'sampletest', component: SampletestComponent},
  // {path:'parent', component: ParentComponent},
  // {path:'first', component:FirstComponent },
  // {path:'second', component:SecondComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
