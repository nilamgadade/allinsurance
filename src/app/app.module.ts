import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ErrorComponent } from './error/error.component';
// import { FirstComponent } from './datacommunication/first/first.component';
// import { ParentComponent } from './datacommunication/parent/parent.component';
// import { ChildComponent } from './datacommunication/parent/child/child.component';
// import { SecondComponent } from './datacommunication/second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { SampletestComponent } from './sampletest/sampletest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffComponent,
    StudentComponent,
    ContactusComponent,
    ErrorComponent,
    // FirstComponent,
    // ParentComponent,
    // ChildComponent,
    // SecondComponent,
    SampletestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
