import { Course } from './course.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http:HttpClient) { }
  
  createCourse(courseData: Course){
    this.http.post("url",courseData)
    .subscribe((res) => console.log(res));
  }

}
