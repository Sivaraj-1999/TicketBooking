import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus_Name } from 'src/app/model/addbus';
import { Bus } from 'src/app/model/bus';
import { AdminService } from 'src/app/service/admin.service';
import { BusService } from 'src/app/service/bus.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  msg:string="";
  public bus:Bus;
  bus_nameArr:Bus_Name[];

  constructor(private router:Router,private service:BusService,private aservice:AdminService) {
    this.bus=new Bus();
    this.bus_nameArr=this.aservice.findBusName();
   }
  insertBusBooking(data:any){
   
    this.bus.username=data.username;
    this.bus.email=data.email;
    this.bus.type=data.type;
    this.bus.onboard=data.onboard;
    this.bus.destination=data.destination;
    this.bus.date=data.date;
    this.bus.time=data.time;
    this.bus.adults=data.adults;
    this.bus.children=data.children;
    this.bus.travel=data.travel;
    this.msg=this.service.addBusBooking(this.bus);
    this.router.navigate(['/BusSeat']);
  }


  ngOnInit(): void {
  }

}
