import { Component, OnInit } from '@angular/core';
import { Train } from 'src/app/model/train';
import { TrainService } from 'src/app/service/train.service';
@Component({
  selector: 'app-all-tbooking',
  templateUrl: './all-tbooking.component.html',
  styleUrls: ['./all-tbooking.component.css']
})
export class AllTbookingComponent implements OnInit {

  trainArr:Train[];
  constructor(private service:TrainService) { 
    this.trainArr=this.service.findAllTrainBooking();
  }

  ngOnInit(): void {
  }

}
