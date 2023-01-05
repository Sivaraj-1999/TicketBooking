import { Component, OnInit } from '@angular/core';
import { Bus_Name } from 'src/app/model/addbus';
import { Bus } from 'src/app/model/bus';
import { Train } from 'src/app/model/train';
import { AdminService } from 'src/app/service/admin.service';
import { BusService } from 'src/app/service/bus.service';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  msg : any= "";
  bus:Bus;
  msgs:any="";
  train:Train;
  msgss:string="";
  bus_name:Bus_Name;
  constructor(private service: BusService,private tservice:TrainService,private aservice:AdminService) { 
    this.bus=new Bus();
    this.train=new Train();
    this.bus_name=new Bus_Name();
  }


 findBusBooking(email:string){
   this.bus=this.service.findBusBooking(email);
 }
 deleteBusBooking(email:string){
   this.msg=this.service.deleteBusBooking(email);
 }
 findTrainBooking(email:string){
  this.train=this.tservice.findTrainBooking(email);
}
deleteTrainBooking(email:string){
  this.msgs=this.tservice.deleteTrainBooking(email);
}

addBusName(data:any){
  this.bus_name.busname=data.busname;
  this.msgss=this.aservice.addBusName(this.bus_name);
}

  ngOnInit(): void {
  }

}
