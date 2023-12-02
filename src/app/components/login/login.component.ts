import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //user=>Object
user:any = {};
// Form ID
loginForm!:FormGroup;
login(){
  console.log("Here is my data: Email:"+this.user.email+" Password: "+this.user.pwd);
}
}
