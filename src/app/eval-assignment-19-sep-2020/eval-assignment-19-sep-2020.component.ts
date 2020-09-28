import { Component, OnInit } from '@angular/core';
import { CustomerDataServiceService } from '../customer-data-service.service';

@Component({
  selector: 'app-eval-assignment-19-sep-2020',
  templateUrl: './eval-assignment-19-sep-2020.component.html',
  styleUrls: ['./eval-assignment-19-sep-2020.component.css']
})
export class EvalAssignment19Sep2020Component implements OnInit {

  constructor(private customerDataService: CustomerDataServiceService) { }

  isCustomersExist = false
  ngOnInit() {
  }
  display = 'login'
  isFetchCustomersForm = false
  isFetchHttp = false
  isDisplayForm = false
  isLoginForm = false
  isLogoutForm = false
  authenticationObj = {userName: '', success: false}
  FetchCustomerData() {
    console.log('FetchCustomerData')
    this.isFetchCustomersForm = true
    this.isFetchHttp = false
    this.isDisplayForm = false
    this.isLoginForm = false
    this.isLogoutForm = false
  }
  FetchDataFromHttpClient() {
    console.log('FetchDataFromHttpClient')
    this.isFetchCustomersForm = false
    this.isFetchHttp = true
    this.isDisplayForm = false
    this.isLoginForm = false
    this.isLogoutForm = false
  }
  DisplayCustomerData() {
    console.log('DisplayCustomerData')
    this.isFetchCustomersForm = false
    this.isFetchHttp = false
    this.isDisplayForm = true
    this.isLoginForm = false
    this.isLogoutForm = false
  }
  Login() {
    console.log('Login')
    this.isFetchCustomersForm = false
    this.isFetchHttp = false
    this.isDisplayForm = false
    this.isLoginForm = true
    this.isLogoutForm = false
  }
  Logout(){
    this.authenticationObj.success = false;
    this.authenticationObj.userName = ''
    this.isFetchCustomersForm = false
    this.isFetchHttp = false
    this.isDisplayForm = false
    this.isLoginForm = false
    this.isLogoutForm = true
    this.display = 'login'
  }
  setAuthentication(_authenticationObj) {
    this.authenticationObj.success = _authenticationObj.success;
    this.authenticationObj.userName = _authenticationObj.userName;
    if(this.authenticationObj.success) {
      this.display = 'form'
    }
  }
  setCustomerData(customer)
  {
    this.isCustomersExist = true
    this.display = 'display'
  }
}