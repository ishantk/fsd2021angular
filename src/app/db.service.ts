import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from '@firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  app: FirebaseApp;

  constructor() { 
    this.app = initializeApp(environment.firebase);
    console.log("DB - Firebase Initialized");
  }
}
