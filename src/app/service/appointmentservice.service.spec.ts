import { TestBed } from '@angular/core/testing';

import { AppointmentserviceService } from './appointmentservice.service';

describe('AppointmentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointmentserviceService = TestBed.get(AppointmentserviceService);
    expect(service).toBeTruthy();
  });
});
