import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { getFirestore, collection, addDoc, setDoc, doc, Timestamp} from '@firebase/firestore/lite'
import { DBService } from '../db.service';
import { merge } from 'rxjs';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  uid: string = "NA";

  authForm = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl(''),
    }
  );

  constructor(private db: DBService) { }

  ngOnInit(): void {
  }

  registerUser(){
    //console.log(this.authForm.value);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.authForm.value.email, this.authForm.value.password)
    .then((userCredential) => {
        console.log("User Created in Auth Module");
        const user = userCredential.user;
        this.uid = user.uid;

        // Save the user in DataBase :)
        const firestoreDB = getFirestore(this.db.app);
        
        /*const usersCollection = collection(firestoreDB, 'users');
        addDoc(usersCollection, {
          name: '',
          phone: '',
          email: this.authForm.value.email,
          profileImage: '',
          address: '',
          uid: this.uid,
          creationTime: Timestamp.now()
        });*/

        const documentToWrite = doc(firestoreDB, 'users', this.uid);
        const userData = {
          name: '',
          phone: '',
          email: this.authForm.value.email,
          profileImage: '',
          address: '',
          uid: this.uid, 
          creationTime: Timestamp.now()
        };
        setDoc(documentToWrite, userData);
        localStorage.setItem("userData", JSON.stringify(userData));
    })
    .catch((error) =>{
      console.log("Something Went Wrong");
    });
  }

  signInUser(){
    const auth = getAuth();

    //signOut(auth);

    signInWithEmailAndPassword(auth, this.authForm.value.email, this.authForm.value.password)
    .then((userCredential) => {
        console.log("User Signed in Auth Module");
        const user = userCredential.user;
        this.uid = user.uid;
    })
    .catch((error) =>{
      console.log("Something Went Wrong");
    });
  }
}

// Task
// Since the user will be saved in localStorage
// Navigate and show the options in the navigation bar accordingly
