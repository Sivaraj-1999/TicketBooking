import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { SignupComponent } from './user/signup/signup.component';
import { ForgotComponent } from './user/forgot/forgot.component';
import { SigninComponent } from './user/signin/signin.component';
import { SeatComponent } from './bus/seat/seat.component';
import { PaymentComponent } from './bus/payment/payment.component';
import { TbookingComponent } from './train/tbooking/tbooking.component';
import { TseatComponent } from './train/tseat/tseat.component';
import { TpaymentComponent } from './train/tpayment/tpayment.component';
import { BookingComponent } from './bus/booking/booking.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { PaidComponent } from './bus/paid/paid.component';
import { CartComponent } from './cart/cart.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AllBookingComponent } from './admin/all-booking/all-booking.component';
import { BusCartComponent } from './bus/bus-cart/bus-cart.component';
import { TpaidComponent } from './train/tpaid/tpaid.component';
import { TrainCartComponent } from './train/train-cart/train-cart.component';
import { AllTbookingComponent } from './admin/all-tbooking/all-tbooking.component';
import { UserService } from './service/user.service';
import { AdminService } from './service/admin.service';
import { AdminForgotComponent } from './admin/admin-forgot/admin-forgot.component';
import { BusService } from './service/bus.service';
import { TrainService } from './service/train.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    WelcomepageComponent,
    SignupComponent,
    ForgotComponent,
    SigninComponent,
    BookingComponent,
    SeatComponent,
    PaymentComponent,
    TbookingComponent,
    TseatComponent,
    TpaymentComponent,
    HeaderComponent,
    HeaderLoginComponent,
    PaidComponent,
    CartComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AllBookingComponent,
    BusCartComponent,
    TpaidComponent,
    TrainCartComponent,
    AllTbookingComponent,
    AdminForgotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [
    UserService,
    AdminService,
    BusService,
    TrainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
