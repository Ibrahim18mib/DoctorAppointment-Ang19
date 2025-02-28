import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-new-appointment',
  imports: [FormsModule],
  templateUrl: './new-appointment.component.html',
  styleUrl: './new-appointment.component.css',
})
export class NewAppointmentComponent {
  appointmentObj: any = {
    patientId: 0,
    patientName: '',
    mobileNo: '',
    email: '',
    city: '',
    address: '',
    appointmentDate: '',
  };

  patientServ = inject(MasterService);

  createAppointment() {
    debugger;
    if (this.appointmentObj != '') {
      this.patientServ.createNewAppointment(this.appointmentObj).subscribe(
        (res: any) => {
          console.log(res);
          alert('Appointment cretaed Successs');
        },
        (error) => {
          console.log('createApi error');
        }
      );
    }
  }

  checkMobileExist() {
    this.appointmentObj = {
      patientId: 0,
      patientName: '',
      mobileNo: '',
      email: '',
      city: '',
      address: '',
      appointmentDate: '',
    };

    this.patientServ
      .customerMobileCheck(this.appointmentObj.mobileNo)
      .subscribe(
        (res: any) => {
          if (res != null) {
            this.appointmentObj.mobileNo = res?.mobileNo;
            this.appointmentObj.patientName = res?.patientName;
            this.appointmentObj.email = res?.email;
            this.appointmentObj.city = res?.city;
            this.appointmentObj.address = res?.address;
            this.appointmentObj.appointmentDate = res?.appointmentDate;
          }
        },
        (error) => {
          console.log('mobileApi error');
          alert('this is neew customer');
        }
      );
  }
}
