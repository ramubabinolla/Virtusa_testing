import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Training } from './training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private http:HttpClient) { }
  
  createTraining(trainingData: Training){
    this.http.post("url",trainingData)
    .subscribe((res) => console.log(res));
  }

}
