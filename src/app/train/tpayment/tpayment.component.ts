import { Component, OnInit } from '@angular/core';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tpayment',
  templateUrl: './tpayment.component.html',
  styleUrls: ['./tpayment.component.css']
})
export class TpaymentComponent implements OnInit {
  msg:string="";
  public train:Train;

  constructor(private router:Router,private service:TrainService) {
       this.train=new Train();
   }
insertBusBooking(data:any){
     this.train.email=data.email;
     this.train.paid=data.paid;

     this.msg=this.service.updateTrainPaymentBooking(this.train);
     this.router.navigate(['/TrainPaid']);
}

  ngOnInit(): void {
  }

}
