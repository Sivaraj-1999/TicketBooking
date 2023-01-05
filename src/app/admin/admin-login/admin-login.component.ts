import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admin:Admin;
  
  constructor(private router:Router,private service:AdminService) { 
    this.admin=new Admin();
  }
  adminLogin(){
    this.service.loginAdmin(this.admin).subscribe(data =>{
      this.router.navigate(['/AdminCart'])
      ; 
    },
        error=> alert("Enter Vaild Credentials"))   
  }

  ngOnInit(): void {
  }

  forgotPassword(){
    this.router.navigate(['AdminForgot']);
  }
 

}
