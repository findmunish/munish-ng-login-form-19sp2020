import { Component, OnInit } from '@angular/core';
import { CustomerDataServiceService } from '../customer-data-service.service';

@Component({
  selector: 'app-display-fetched-customers',
  templateUrl: './display-fetched-customers.component.html',
  styleUrls: ['./display-fetched-customers.component.css']
})
export class DisplayFetchedCustomersComponent implements OnInit {

  constructor(private customerDataService: CustomerDataServiceService) { }
  customers = []
  ngOnInit() {
    this.customers = this.customerDataService.getData()
  }
}