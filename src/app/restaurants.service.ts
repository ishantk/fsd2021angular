import { Injectable } from '@angular/core';
import { Restaurant } from './model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  // As of now this is HardCoded
  // In Future it should be populated from DataBase from Server Side
  restaurants: Restaurant[] = [
    new Restaurant("McDonalds", 30, 4.3, "burger, indian, continental"),
    new Restaurant("Table By Basant", 40, 4.5, "indian, chinese, continental"),
    new Restaurant("Subway", 15, 4.8, "sandwich, salads"),
    new Restaurant("Pandit Parantha", 20, 4.5, "paranthas, punjabi, indian"),
    new Restaurant("Cafe Coffee Day", 10, 4.1, "coffee, cake, sandwich"),
  ];

  constructor() { }

  getRestaurants(){
    return this.restaurants;
  }

}
