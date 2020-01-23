import { format } from 'url';
import { DatePipe } from '@angular/common';


export class Appointmentmodel {
    constructor() { }

    formatDate(date) {
        var dateTime = date.year + '/' + date.month + '/' + date.day;
        return dateTime;
    }
    existingTimeSlot(currentDate, listOfSlot, allAppointmentList) {
        debugger;
        var listOfDateAppointment = [];
        var exisintTimeSlot=[];
        for (var loop = 0; loop < allAppointmentList.length; loop++) {
            if (allAppointmentList[loop].pickDate == currentDate) {
                listOfDateAppointment.push(allAppointmentList[loop]);
            }
        }
        for(var outerLoop=0;outerLoop<listOfDateAppointment.length;outerLoop++){
               for(var innerLoop=0;innerLoop<listOfSlot.length;innerLoop++){
                   if(listOfSlot[innerLoop].value==listOfDateAppointment[outerLoop].timeSlot){
                    listOfSlot.splice(innerLoop,1);
                   }

               }
        }
        return listOfSlot;

    }

}
export const GlobalVariable = Object.freeze({
    LocalStorageName: 'appointmentList',
    AllApointmentList: [],
    MovieDataUrl:'http://www.omdbapi.com/?apikey=d1a806e0&s='
    
});
export enum AppointmentTimeSlot {
    '4:00 - 5:00' = 1,
    '5:00 - 6:00',
    '6:00 - 7:00'
}