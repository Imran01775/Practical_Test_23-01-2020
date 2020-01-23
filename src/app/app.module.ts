import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { NgbDatepickerModule, NgbTimepickerModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Appointmentmodel } from './model/appointmentmodel';
import { DatePipe } from '@angular/common';
import { AppointmentListComponent } from './appointment-list/appointment-list.component'
import {NgxPaginationModule} from 'ngx-pagination';
import { MoviesearchComponent } from './moviesearch/moviesearch.component';
import { UserlistComponent } from './userlist/userlist.component';
@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    AppointmentListComponent,
    MoviesearchComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [Appointmentmodel,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
