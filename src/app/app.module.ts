import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HeaderComponent } from './header/header.component';
import { ReportGenerationComponent } from './report-generation/report-generation.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainingsComponent } from './trainings/trainings.component';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { AttendanceComponent } from './attendance/attendance.component';
import { NominationsComponent } from './nominations/nominations.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HeaderComponent,
    ReportGenerationComponent,
    TrainingsComponent,
    FilterPipe,
    SortPipe,
    AttendanceComponent,
    NominationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
