import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User;

  constructor(private http:HttpClient) { 
    this.user=new User();
  }

  addUser(user:User){
    this.http.post("http://localhost:1234/PROJECT/CreateUser",user).subscribe();
    return "Record inserted";
  }

  loginUser(user:User):Observable<object>{
    return this.http.post("http://localhost:1234/PROJECT/LoginUser",user);
  }
 
  changePassword(user:User){
    this.http.put("http://localhost:1234/PROJECT/ForgotPassword",user).subscribe();
    return "Password Changed Successfully";
  }
}
