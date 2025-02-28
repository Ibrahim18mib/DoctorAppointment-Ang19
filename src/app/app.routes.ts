import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { NewAppointmentComponent } from './components/new-appointment/new-appointment.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'appointment-list',
        component: AppointmentListComponent,
      },
      {
        path: 'patient-list',
        component: PatientListComponent,
      },
      {
        path: 'new-appointment',
        component: NewAppointmentComponent,
      },
    ],
  },
];
