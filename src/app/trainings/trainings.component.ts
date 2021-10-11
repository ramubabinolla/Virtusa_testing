import { Component, OnInit } from '@angular/core';
import { Training } from '../training.model';
import { TrainingsService } from 'app/trainings.service';
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
// export class TrainingsComponent implements OnInit {

//   trainings : Training[] = [{
//     name: "microservices", duration: 20
//   },
//   {
//     name: "django", duration: 30
//   },
//   {
//     name: "react", duration: 15
//   }]

//   columns : string[] = ["name","duration"];
//   searchTerm: string;
//   // direction: string = "asc";
//   column: string = "name";
//   // type: string = "string";
  
//   constructor() { }

//   ngOnInit(): void {
//   }

//   // sortParams(event:any){
//   //   //let id:string = event.target.attributes.id;
    
//   //   switch (event.target.attributes.id){
//   //     case "nameAsc":
//   //       this.direction = "asc";
//   //       this.column = "name";
//   //       this.type = "string";
//   //       console.log("nameAsc");
//   //       break;
//   //     case "nameDesc":
//   //       this.direction = "desc";
//   //       this.column = "name";
//   //       this.type = "string";
//   //       console.log("nameDesc");
//   //       break;
//   //     case "durationAsc":
//   //       this.direction = "asc";
//   //       this.column = "duration";
//   //       this.type = "number";
//   //       console.log("durationAsc");
//   //       break;
//   //     case "durationDesc":
//   //       this.direction = "desc";
//   //       this.column = "duration";
//   //       this.type = "number";
//   //       console.log("durationDesc");
//   //       break;

//   //   }
//   //   console.log(this.direction + this.column + this.type);
//   // }

// }
 export class TrainingsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  trainingData: Training;
  constructor(private trainingService : TrainingsService) { }
  onSubmit(formData: any){
    this.trainingData = {trainingTitle : formData.trainingTitle, trainingId : formData.trainingId, scheduledfrom : formData.scheduledfrom ,
    scheduledto: formData.scheduledto,hoursPerDay : formData.hoursPerDay, 
    from : formData.from, to:formData.to}
    console.log(this.trainingData);
    this.trainingService.createTraining(this.trainingData);
  }

 }