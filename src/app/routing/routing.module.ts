import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from '../appointment/appointment.component';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { MoviesearchComponent } from '../moviesearch/moviesearch.component';


const routes: Routes = [
  { path: '', redirectTo: '/appointment', pathMatch: 'full' },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'appointmentlist', component: AppointmentListComponent },
  { path: 'movie', component: MoviesearchComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
      RouterModule
   ] 
})

export class RoutingModule {



 }
