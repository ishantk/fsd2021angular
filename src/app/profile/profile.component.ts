import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Profile} from '../model/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //email = new FormControl('demo@example.com');
  email = new FormControl('');

  myProfile: Profile = {
    name: "John Watson",
    about: "I am currently seeking an opprotunity in Angular",
    email: "john@example.com",
    age: 30,
    gender: "male",
    address: "Redwood Shores"
  };

  message = "";
  //data = 10;
  
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(){
    this.message = "This is Changed";
  }

  validate(){
    // code here to check if email is blank or a valid email
    if(this.email.value == ""){
      // Exploratory Assignment
      // Regular Expressions to Validate the Email
      this.message = "Email is InValid";
      this.email.setValue("demo@example.com");
    }else{
      this.message = "Email is Valid";
    }
    
  }

}
