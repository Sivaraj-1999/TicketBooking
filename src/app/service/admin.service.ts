import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus_Name } from '../model/addbus';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin:Admin;
  bus_nameArr:Bus_Name[];

  constructor(private http:HttpClient) { 
   this.admin=new Admin();
   this.bus_nameArr=[];
  }

  loginAdmin(admin:Admin):Observable<object>{
    return this.http.post("http://localhost:1234/PROJECT/LoginAdmin",admin);
  }

  changePassword(admin:Admin){
    this.http.put("http://localhost:1234/PROJECT/AdminForgotPassword",admin).subscribe();
    return "Password Changed Successfully";
  }


  addBusName(bus_name:Bus_Name){
    this.http.post("http://localhost:1234/PROJECT/AddBusName",bus_name).subscribe();
    return "Bus Name Record Inserted";
  }

  findBusName(){
    this.http.get<Bus_Name[]>("http://localhost:1234/PROJECT/FindBusName").subscribe(data=>this.bus_nameArr=data);
    return this.bus_nameArr;
  }

}
