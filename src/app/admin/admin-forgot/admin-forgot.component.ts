import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-forgot',
  templateUrl: './admin-forgot.component.html',
  styleUrls: ['./admin-forgot.component.css']
})
export class AdminForgotComponent implements OnInit {

  msg:string="";
  public admin:Admin;

  constructor(private router: Router,private service:AdminService) {
    this.admin=new Admin();
   }
   forgotPassword(data:any){
    this.admin.email=data.email;
    this.admin.password=data.password;

    this.msg=this.service.changePassword(this.admin);
    this.router.navigate(['/AdminLogin']);

  }

  ngOnInit(): void {
  }

}
