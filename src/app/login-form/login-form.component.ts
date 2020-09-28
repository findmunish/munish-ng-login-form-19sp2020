import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ USERS } from '../userList';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  users = USERS;
  ngOnInit() {
  }
  @Output() isUserAuthenticated = new EventEmitter()
  authentication = {success: false, userName: ''}
  login = {id:'', password:''}
  alertMessage = ''
  onFormSubmit() {
    let index = this.users.findIndex( user => user.id.toLowerCase() === this.login.id.toLowerCase() && user.password === this.login.password)
    if (index === -1) {
      this.alertMessage = 'Invalid credentials!'
      this.authentication.success = false
      this.authentication.userName = ''
    } else {
      this.alertMessage = 'Login successful!. Access Granted!'
      this.authentication.success = true
      this.authentication.userName = this.login.id.toUpperCase()
    }
    this.isUserAuthenticated.emit(this.authentication);
  }
}
