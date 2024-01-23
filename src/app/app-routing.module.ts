import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctoresComponent } from './doctores/doctores.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './patients/patients.component';
import { RegistrationComponent } from './registration/registration.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'reg',
    component:RegistrationComponent
  },
  {
    path:'dr',
    component:DoctoresComponent
  },
  {
    path:'pat',
    component:PatientsComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'invoice',
    component:InvoiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
