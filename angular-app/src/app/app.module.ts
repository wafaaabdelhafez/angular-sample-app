import { EmployeeService } from './employee.service';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' 

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import {FormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    EmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
