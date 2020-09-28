import { Injectable } from '@angular/core';

@Injectable()
export class CustomerDataServiceService {

  constructor() { }
  customers = []
  getData() {
    return this.customers
  }
  setData(customerFormData) {
    this.customers.push(customerFormData)
  }
}