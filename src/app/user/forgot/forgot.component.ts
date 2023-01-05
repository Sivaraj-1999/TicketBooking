import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  msg:string="";
  public user:User;

  constructor(private router: Router,private service:UserService) {
    this.user=new User();
   }
   forgotPassword(data:any){
    this.user.email=data.email;
    this.user.password=data.password;
    this.user.confirmpassword=data.confirmpassword;

    this.msg=this.service.changePassword(this.user);
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

  ngOnInit(): void {
  }

  
signup(){
  this.router.navigate(['/Signup']);
}

}
