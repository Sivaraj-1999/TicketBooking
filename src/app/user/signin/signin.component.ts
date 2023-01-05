import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User;


  constructor(private router:Router,private service:UserService) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  userLogin(){
    this.service.loginUser(this.user).subscribe(data =>{
      this.router.navigate(['/WelcomePage'])
     ; 
    },
        error=> alert("Enter Vaild Credentials"))   
  }
signup(){
  this.router.navigate(['/Signup'])
}
forgot(){
  this.router.navigate(['/Forgot'])
}

}
