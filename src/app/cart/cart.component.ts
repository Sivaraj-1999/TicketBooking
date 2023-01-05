import { Component, OnInit } from '@angular/core';
import { Bus } from '../model/bus';
import { Train } from '../model/train';
import { BusService } from '../service/bus.service';
import { TrainService } from '../service/train.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  msg : any= "";
  bus:Bus;
  msgs : any= "";
  train:Train;
  constructor(private service: BusService,private tservice:TrainService) { 
    this.bus=new Bus();
    this.train=new Train();

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
  ngOnInit(): void {
  }

}
