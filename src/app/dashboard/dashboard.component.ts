import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DBService } from '../db.service';
import { getFirestore, collection, getDocs } from '@firebase/firestore/lite'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Explore Observer Design Pattern so as to closely understand the API Observable
  //documents: Observable<any[]>;

  promoCodeList : any;

  constructor(firestore: AngularFirestore, private db: DBService) {
    // Fetch Document from FirebaseFirestore :)
    //this.documents = firestore.collection("promo-codes").valueChanges();
    this.fetchPromoCodes();
  }

  async fetchPromoCodes(){
    const firestoreDB = getFirestore(this.db.app);
    const promoCodeCollection = collection(firestoreDB, 'promo-codes');
    const snapshots = await getDocs(promoCodeCollection);
    this.promoCodeList = snapshots.docs.map(doc => doc.data());
  }

  ngOnInit(): void {
  }

}
