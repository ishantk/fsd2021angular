import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';

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
    //console.log(this.authForm.value);
    /*const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log("User Created in Auth Module");
        
    })
    .catch((error) =>{
      console.log("Something Went Wrong");
    });*/
  }

}
