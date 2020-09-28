import { Component, OnInit } from '@angular/core';
import { HttpClient }  from '@angular/common/http';

@Component({
  selector: 'app-fetch-http',
  templateUrl: './fetch-http.component.html',
  styleUrls: ['./fetch-http.component.css']
})
export class FetchHttpComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  fetchedHttpData = [];
    ngOnInit() {
    const link = "https://jsonplaceholder.typicode.com/users"
    this.httpClient.get(link).subscribe((rec)=>this.getHttpFetchedData(rec));
  }
  getHttpFetchedData(recordData){
    this.fetchedHttpData = recordData
  }
  applyUserNameConstraint(user) {
    return user.username.length > 5
  }
}