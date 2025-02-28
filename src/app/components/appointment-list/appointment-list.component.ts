import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-appointment-list',
  imports: [],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css',
})
export class AppointmentListComponent implements OnInit {
  appointmentLists: any[] = [];
  masterServ = inject(MasterService);

  ngOnInit(): void {
    this.getAllAppointments();
  }

  getAllAppointments() {
    this.masterServ.getAllAppointments().subscribe(
      (res: any) => {
        this.appointmentLists = res;
      },
      (err) => {
        console.log('getallappointment error');
      }
    );
  }
}
