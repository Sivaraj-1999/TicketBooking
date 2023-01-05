import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Train } from '../model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  train:Train;
  trainArr:Train[];
  constructor(private http:HttpClient) { 
    this.train=new Train();
    this.trainArr=[];
  }

  addTrainBooking(train:Train){
    this.http.post("http://localhost:1234/PROJECT/CreateTrainBooking",train).subscribe();
    return "Record inserted";
  }

  updateTrainSeatBooking(train:Train){
    this.http.put("http://localhost:1234/PROJECT/UpdateTrainSeatBooking",train).subscribe();
    return "Record updated";
  }

  updateTrainPaymentBooking(train:Train){
    this.http.put("http://localhost:1234/PROJECT/UpdateTrainPaymentBooking",train).subscribe();
    return "Record updated";
  }

  findTrainBooking(email:string){
    this.http.get<Train>("http://localhost:1234/PROJECT/FindTrainBooking/"+email).subscribe(data=>this.train=data);
    return this.train;
  }
  deleteTrainBooking(email:string){
    this.http.delete("http://localhost:1234/PROJECT/DeleteTrainBooking/"+email).subscribe();
    return "Record Deleted";
  }

  findAllTrainBooking(){
    this.http.get<Train[]>("http://localhost:1234/PROJECT/FindAllTrainBooking").subscribe(data=>this.trainArr=data);
    return this.trainArr;
  }
}
