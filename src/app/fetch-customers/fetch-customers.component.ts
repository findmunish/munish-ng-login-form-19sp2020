import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerDataServiceService } from '../customer-data-service.service';

@Component({
  selector: 'app-fetch-customers',
  templateUrl: './fetch-customers.component.html',
  styleUrls: ['./fetch-customers.component.css']
})
export class FetchCustomersComponent implements OnInit {

  constructor(private customerDataService: CustomerDataServiceService) { }

  customerInfo = {firstName: "", lastName: "", email: "", contactNum: "", street: "", city: "", state: "", zip:""}
  ngOnInit() {}

  @Output() customerDataSubmitted = new EventEmitter()
  customerDataForm = new FormGroup({
    firstName: new FormControl(this.customerInfo.firstName),
    lastName: new FormControl(this.customerInfo.lastName),
    contact: new FormGroup({
      email: new FormControl(this.customerInfo.email),
      contactNum: new FormControl(this.customerInfo.contactNum),
    }),
    address: new FormGroup({
      street: new FormControl(this.customerInfo.street),
      city: new FormControl(this.customerInfo.city),
      state: new FormControl(this.customerInfo.state),
      zip: new FormControl(this.customerInfo.zip)
    })
  })
  onSubmit() {
    this.customerDataSubmitted.emit(this.customerDataForm.value)
    this.customerDataService.setData(this.customerDataForm.value)
  }
}