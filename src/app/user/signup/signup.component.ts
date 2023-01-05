import { Component, OnInit } from '@angular/core';
import { Router,  } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  

    msg : any= "";
  public user: User;


  constructor(private router:Router,private service:UserService) {
    this.user=new User();
   }
 
   insertUser(data: any){
     this.user.username=data.username;
     this.user.email=data.email;
     this.user.dob=data.dob;
     this.user.mobile=data.mobile;
     this.user.password=data.password;
     this.user.confirmpassword=data.confirmpassword;

     this.msg=this.service.addUser(this.user);
     this.router.navigate(['/Signin']);
   }

  ngOnInit(): void {
  }
  signin(){
    this.router.navigate(['/Signin']);
  }
  
  passwordsMatching: boolean = false;
  isConfirmPasswordDirty: boolean = false;
  confirmPasswordClass: string = 'form-control';

checkPasswords(pwd: string, cpwd: string) {
    this.isConfirmPasswordDirty = true;
    if (pwd === cpwd) {
      this.passwordsMatching = true;
      this.confirmPasswordClass = 'form-control is-valid';
    } else {
      this.passwordsMatching = false;
      this.confirmPasswordClass = 'form-control is-invalid'
    }
  }

  

}
