import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  webServiceEndPoint = "https://9cf1-49-156-74-158.ngrok.io/cases";

  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this.webServiceEndPoint).subscribe(
      response => {
        console.log(response);
      }
    );
   }

  ngOnInit(): void {
  }

}
