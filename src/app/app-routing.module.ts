import { ContentChildren, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { PaymentComponent } from './bus/payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AllBookingComponent } from './admin/all-booking/all-booking.component';
import { BookingComponent } from './bus/booking/booking.component';
import { SeatComponent } from './bus/seat/seat.component';
import { PaidComponent } from './bus/paid/paid.component';
import { BusCartComponent } from './bus/bus-cart/bus-cart.component';
import { TbookingComponent } from './train/tbooking/tbooking.component';
import { TseatComponent } from './train/tseat/tseat.component';
import { TpaymentComponent } from './train/tpayment/tpayment.component';
import { TpaidComponent } from './train/tpaid/tpaid.component';
import { TrainCartComponent } from './train/train-cart/train-cart.component';
import { AllTbookingComponent } from './admin/all-tbooking/all-tbooking.component';
import { AdminForgotComponent } from './admin/admin-forgot/admin-forgot.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'Signup',component:SignupComponent},
  {path:'Signin',component:SigninComponent},
  {path:'Forgot',component:ForgotComponent},
  {path:'WelcomePage',component:WelcomepageComponent},
  {path:'BusBooking',component:BookingComponent},
  {path:'BusSeat',component:SeatComponent},
  {path:'BusPayment',component:PaymentComponent},
  {path:'Paid',component:PaidComponent},
  {path:'Cart',component:CartComponent},
  {path:'BusCart',component:BusCartComponent},
  {path:'TrainBooking',component:TbookingComponent},
  {path:'TrainSeat',component:TseatComponent},
  {path:'TrainPayment',component:TpaymentComponent},
  {path:'TrainPaid',component:TpaidComponent},
  {path:'Cart',component:CartComponent},
  {path:'BusCart',component:BusCartComponent},
  {path:'TrainCart',component:TrainCartComponent},


  {path:'AdminLogin',component:AdminLoginComponent},
  {path:'AdminForgot',component:AdminForgotComponent},
  {path:'AdminCart',component:AdminDashboardComponent},
  {path:'FindAllBus',component:AllBookingComponent},
  {path:'FindAllTrain',component:AllTbookingComponent},

  {path:'**',component:HomepageComponent}
   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
