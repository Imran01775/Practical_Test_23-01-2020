import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppointmentTimeSlot, Appointmentmodel } from '../model/appointmentmodel';
import { AppointmentserviceService } from '../service/appointmentservice.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentForm: FormGroup;
  submitted: boolean = false;
  listOfTimeSlot: any = [];
  listOfAppointment: any = [];
  constructor(private formBuilder: FormBuilder, private appointmentService: AppointmentserviceService, private appointmentmodel: Appointmentmodel, private datepipe: DatePipe) { }
  ngOnInit() {

    this.listOfTimeSlot = Object.keys(AppointmentTimeSlot).map(k => ({ key: k, value: AppointmentTimeSlot[k as any] }));
    var half_length = Math.ceil(this.listOfTimeSlot.length / 2);
    this.listOfTimeSlot = this.listOfTimeSlot.splice(half_length, this.listOfTimeSlot.length);
    //load all data 
    this.listOfAppointment = this.appointmentService.loadAllAppointmentList();

    this.appointmentForm = this.formBuilder.group({
      firstName: [''], //['',Validators.minLength(5),Validators.required]
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      address: [''],
      age: [''],
      pickDate: [''],
      timeSlot: [0]
    });


  }
  dataChanged(eventDate) {
    eventDate = this.appointmentmodel.formatDate(eventDate);
    var listOfSlot = this.appointmentmodel.existingTimeSlot(eventDate, this.listOfTimeSlot, this.listOfAppointment);
    console.log(listOfSlot);
  }

  onSubmit() {
    // this.submitted = true;
    // if (this.appointmentForm.invalid) {
    //   return;
    // }
    this.appointmentForm.value.pickDate = this.appointmentmodel.formatDate(this.appointmentForm.value.pickDate);
    this.appointmentService.saveAppointment(this.appointmentForm.value);

  }



}
