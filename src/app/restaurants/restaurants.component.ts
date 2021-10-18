import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Restaurant } from '../model/restaurant';
import { RestaurantsService } from '../restaurants.service';
import { getFirestore, collection, addDoc, setDoc, doc, Timestamp} from '@firebase/firestore/lite'
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { DBService } from '../db.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  /*restaurants: Restaurant[] = [
    new Restaurant("McDonalds", 30, 4.3, "burger, indian, continental"),
    new Restaurant("Table By Basant", 40, 4.5, "indian, chinese, continental"),
    new Restaurant("Subway", 15, 4.8, "sandwich, salads")
  ];*/

  cities = [
    {cityName: "Select City", state:""},
    {cityName: "Ludhina", state:"Punjab", pinCode: [141001, 141002, 141005]},
    {cityName: "Chadigarh", state:"Punjab"},
    {cityName: "Amritsar", state:"Punjab"},
    {cityName: "Jalandhar", state:"Punjab"},
    {cityName: "Phagwara", state:"Punjab"},
  ];

  restaurantForm = new FormGroup(
    {
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      veg: new FormControl(false),
      nonVeg: new FormControl(false),
      servingType: new FormControl('delivery'),
      city: new FormControl(this.cities[0]),
      image: new FormControl('')
    }
  );

  //restaurants = this.service.getRestaurants();

  // if the above array is suppose to be created by fetching data from Server
  // it will take time to load

  // Injection for Service in Constructor of Component
  //constructor(private service: RestaurantsService) { }
  constructor(private db: DBService) { }
  

  ngOnInit(): void {
  }

  addRestaurant(name: string, timeToDeliver: string, ratings: string, categories: string){
    //this.restaurants.push(new Restaurant(name, Number(timeToDeliver), Number(ratings), categories))
  }

  uploadImgeToFirebase(){
      const metadata = {
        contentType: 'image/jpeg',
      };
      const filePath = this.restaurantForm.value.image;
      const storageReference = getStorage();
      const restaurantImageReference = ref(storageReference, "restaurant-images/"+this.restaurantForm.value.email+".jpg");
      const uploadTask = uploadBytes(restaurantImageReference, filePath, metadata);
      console.log("Image Uploaded Successfully");
       
  }
  

  addRestaurantToFirebase(){
    console.log(this.restaurantForm.value);
  
    //1. Firstly, Upload the Image in Firebase Storage
    //   After Image is uploaded we will get image download URL
    //   in the form data, image FormControl value should be updated with download URL
    //2. Save Data in Firebase

    // 1. Uplaod Image
    this.uploadImgeToFirebase();
    
  }
}
