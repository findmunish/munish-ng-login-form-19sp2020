import { Component, OnInit } from '@angular/core';
import{ USERS } from '../userList';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  users = USERS;
}