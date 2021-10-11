import { Time } from "@angular/common";

export class Training{
    trainingTitle: string;
    trainingId: string;
    scheduledfrom : Date;
    scheduledto  : Date;
    hoursPerDay: number;
    from : Time;
    to : Time;
}