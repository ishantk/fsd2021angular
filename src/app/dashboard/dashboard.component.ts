import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Explore Observer Design Pattern so as to closely understand the API Observable
  documents: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    // Fetch Document from FirebaseFirestore :)
    this.documents = firestore.collection("promo-codes").valueChanges();
  }

  ngOnInit(): void {
  }

}
