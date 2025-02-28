import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  baseUrl: any = 'https://localhost:7106/';
  constructor(private http: HttpClient) {}

  getAllAppointments() {
    return this.http.get(
      'https://localhost:7106/api/Appointment/GetAllAppoints'
    );
  }

  createNewAppointment(patientObj: any) {
    return this.http.post(
      'https://localhost:7106/api/Appointment/CreateNewAppointment',
      patientObj
    );
  }

  customerMobileCheck(mobileNo: string) {
    return this.http.get(
      'https://localhost:7106/api/Appointment/checkMobile?mobile=' + mobileNo
    );
  }
}
