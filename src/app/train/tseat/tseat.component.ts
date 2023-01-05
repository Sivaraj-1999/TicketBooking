import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';

@Component({
  selector: 'app-tseat',
  templateUrl: './tseat.component.html',
  styleUrls: ['./tseat.component.css']
})
export class TseatComponent implements OnInit {
  msg:string="";
  public train:Train;
    constructor(private router:Router,private service:TrainService) {
          this.train=new Train();
     }
  
     insertBusBooking(data:any){
       this.train.email=data.email;
       this.train.seatno=data.seatno;
       this.train.noofseats=data.noofseats;
       this.train.cost=data.cost;
  
       this.msg=this.service.updateTrainSeatBooking(this.train);
       this.router.navigate(['/TrainPayment'])
  }
  

  ngOnInit(): void {
  }

}
