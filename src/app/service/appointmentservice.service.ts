import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../model/appointmentmodel';
import { JsonPipe } from '@angular/common';
import { parse } from 'querystring';
@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {


  constructor(private http: HttpClient) { }


  saveAppointment(dataObject) {
    GlobalVariable.AllApointmentList.push(dataObject);
    localStorage.setItem(GlobalVariable.LocalStorageName, JSON.stringify(GlobalVariable.AllApointmentList));
  }

  loadAllAppointmentList() {
    var response = localStorage.getItem(GlobalVariable.LocalStorageName);
    return JSON.parse(response);

  }


}


