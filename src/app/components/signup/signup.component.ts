import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    console.log("here into on init,Signup");
  }
  signupForm!:FormGroup;
  signup(){

  }
}
