import { Component, OnInit } from '@angular/core';
import {Profile} from '../model/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myProfile: Profile = {
    name: "John Watson",
    about: "I am currently seeking an opprotunity in Angular",
    email: "john@example.com",
    age: 30,
    gender: "male",
    address: "Redwood Shores"
  };

  message = "Hello";
  //data = 10;
  
  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked(){
    this.message = "This is Changed";
  }

}
