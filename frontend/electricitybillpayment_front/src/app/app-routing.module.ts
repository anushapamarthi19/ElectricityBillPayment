import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from'./registration/registration.component'; 
import { ElectricityPageComponent } from './electricity-page/electricity-page.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { SuccessfulComponent } from './successful/successful.component';
// import { RegisterComponent } from './register/register.component';  

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },  // Add this route
  { path: 'electricity', component: ElectricityPageComponent}, //Add route for ElectricityPageComponent
  { path: 'payment',component: PaymentpageComponent},
  {path: 'successful', component: SuccessfulComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // Add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
