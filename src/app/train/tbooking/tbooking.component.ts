import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-tbooking',
  templateUrl: './tbooking.component.html',
  styleUrls: ['./tbooking.component.css']
})
export class TbookingComponent implements OnInit {
  msg:string="";
  public train:Train;
  constructor(private router:Router,private service:TrainService) {
    this.train=new Train();
   }
   insertTrainBooking(data:any){
   
    this.train.username=data.username;
    this.train.email=data.email;
    this.train.type=data.type;
    this.train.onboard=data.onboard;
    this.train.destination=data.destination;
    this.train.date=data.date;
    this.train.time=data.time;
    this.train.adults=data.adults;
    this.train.children=data.children;
    this.train.travel=data.travel;
    this.train.quota=data.quota;

    this.msg=this.service.addTrainBooking(this.train);
    this.router.navigate(['/TrainSeat'])
  }

  ngOnInit(): void {
  }

}
