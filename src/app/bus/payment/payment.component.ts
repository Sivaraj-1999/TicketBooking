import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/model/bus';
import { BusService } from 'src/app/service/bus.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  msg:string="";
  public bus:Bus;

  constructor(private router:Router,private service:BusService) {
       this.bus=new Bus();
   }
insertBusBooking(data:any){
     this.bus.email=data.email;
     this.bus.paid=data.paid;

     this.msg=this.service.updateBusPaymentBooking(this.bus);
     this.router.navigate(['/Paid']);
}
  ngOnInit(): void {
  }
}
