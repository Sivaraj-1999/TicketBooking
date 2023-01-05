import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from 'src/app/model/bus';
import { BusService } from 'src/app/service/bus.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
msg:string="";
public bus:Bus;
  constructor(private router:Router,private service:BusService) {
        this.bus=new Bus();
   }

   insertBusBooking(data:any){
     
     this.bus.email=data.email;
     this.bus.seatno=data.seatno;
     this.bus.noofseats=data.noofseats;
     this.bus.cost=data.cost;

     this.msg=this.service.updateBusSeatBooking(this.bus);
     this.router.navigate(['/BusPayment'])
}

   
  
   ngOnInit(): void {
     
  }
}
