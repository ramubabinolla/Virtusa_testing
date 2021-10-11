import { Training } from './training.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(trainings: Training[], direction: string, column: string, type: string) {
    // let sortedTrainings: Training[] = [];
    // sortedTrainings = direction === "asc" ? this.sortAscending(trainings, column, type) : this.sortDescending(trainings, column, type);
    // return sortedTrainings;
  }

  // sortAscending(trainings: Training[], column: string, type: string) {

  //   trainings.sort((a, b) => {
  //     if (type == "string") {
  //       if (a[column].toUpperCase() < b[column].toUpperCase()) {
  //         return -1;
  //       }
  //     }
  //     return a[column] - b[column];
      
  //   })
  //   return trainings;
  // }

  // sortDescending(trainings: Training[], column: string, type: string) {
  //   trainings.sort((a, b) => {
  //     if (type == "string") {
  //       if (a[column].toUpperCase() > b[column].toUpperCase()) {
  //         return -1;
  //       }
  //     }
  //     return b[column] - a[column];

  //   })
  //   return trainings;
  // }

}
