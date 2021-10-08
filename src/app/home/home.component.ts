import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  query: string = "No Data";
  name: string = "No Data";

  // We do not create the Objects of Components
  // hence, Angular FW is creating Objects on behalf of us
  // Inversion of Control : IOC

  // That means, we must not use the constructorto initialize or pass some data as input defined by developer
  // As of now we have added ActivatedRoute which will be automatically initialized by Angular

  // Dependency Injection
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['query']
      this.name = params['name']
    });
  }

}
