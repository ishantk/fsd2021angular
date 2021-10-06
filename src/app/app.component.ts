import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Controller where we will write our business logic
// i.e. algo will be coded here
// it will use model to hold and process data
export class AppComponent {
  
  // Model -> Single Value Container called String
  // which are holding data for us :)
  title = 'fsd2021angular';
  
  // Model -> Multi Value Container called Object
  profile = {
    name: 'John Watson',
    email: 'john@example.com',
    age: 30
  };

}
