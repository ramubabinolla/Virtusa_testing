import { Course } from './../course.model';
import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';
;
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseData: Course;
  
  constructor(private courseService : CoursesService) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any){
    this.courseData = {courseTitle : formData.courseTitle, duration : formData.duration, isTheory : formData.isTheory,
    isHandsOn : formData.isHandsOn, hoursPerDay : formData.hoursPerDay, techStack: formData.techStack, preRequisites : formData.preRequisites}
    console.log(this.courseData);
    this.courseService.createCourse(this.courseData);
  }

}
