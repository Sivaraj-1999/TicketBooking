import { Injectable } from '@angular/core';
import { Bus } from '../model/bus';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  bus:Bus;
  busArr:Bus[];

  constructor(private http:HttpClient) {
    this.bus=new Bus();
    this.busArr=[];
   
   }
   addBusBooking(bus:Bus){
    this.http.post("http://localhost:1234/PROJECT/CreateBusBooking",bus).subscribe();
    return "Record inserted";
  }
  updateBusSeatBooking(bus:Bus){
    this.http.put("http://localhost:1234/PROJECT/UpdateBusSeatBooking",bus).subscribe();
    return "Record updated";
  }
  updateBusPaymentBooking(bus:Bus){
    this.http.put("http://localhost:1234/PROJECT/UpdateBusPaymentBooking",bus).subscribe();
    return "Record updated";
  }

  findAllBusBooking(){
    this.http.get<Bus[]>("http://localhost:1234/PROJECT/FindAllBusBooking").subscribe(data=>this.busArr=data);
    return this.busArr;
  }

  findBusBooking(email:string){
    this.http.get<Bus>("http://localhost:1234/PROJECT/FindBusBooking/"+email).subscribe(data=>this.bus=data);
    return this.bus;
  }
  deleteBusBooking(email:string){
    this.http.delete("http://localhost:1234/PROJECT/DeleteBusBooking/"+email).subscribe();
    return "Record Deleted";
  }
}
