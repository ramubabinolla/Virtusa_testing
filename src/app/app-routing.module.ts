import { ReportGenerationComponent } from './report-generation/report-generation.component';
import { CourseComponent } from './course/course.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './trainings/trainings.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { NominationsComponent } from './nominations/nominations.component';
const routes: Routes = [
  {path:"courses", component:CourseComponent},
  {path:"report", component:ReportGenerationComponent},
  {path:"trainings",component:TrainingsComponent},
  {path:"attendance",component:AttendanceComponent},
  {path:"nominations",component:NominationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
