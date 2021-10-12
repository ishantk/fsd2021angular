import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  authForm = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
    }
  );

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.authForm.value);
  }

}
