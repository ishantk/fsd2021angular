import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  restaurantId: String = "";
  restaurantName:String = "";

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     this.restaurantId = params['id'];
     this.restaurantName = params['name'];
    });
  }

}
