import { Component, OnInit } from '@angular/core';
import { BusService } from 'src/app/service/bus.service';
import { Bus } from 'src/app/model/bus';

@Component({
  selector: 'app-all-booking',
  templateUrl: './all-booking.component.html',
  styleUrls: ['./all-booking.component.css']
})
export class AllBookingComponent implements OnInit {
 busArr:Bus[];
  constructor(private service:BusService) { 
    this.busArr=this.service.findAllBusBooking();
  }

  ngOnInit(): void {
  }

}
