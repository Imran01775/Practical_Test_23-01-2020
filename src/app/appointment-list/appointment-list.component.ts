import { Component, OnInit } from '@angular/core';
import { AppointmentserviceService } from '../service/appointmentservice.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  listOfAppointment: any[];


  ngOnInit() {
    debugger;
    this.listOfAppointment= this.appointmentService.loadAllAppointmentList();
    console.log(this.listOfAppointment);
  }



  config: any;
  collection = { count: 0, data: this.listOfAppointment };
  constructor(private appointmentService: AppointmentserviceService) {


    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }




}
