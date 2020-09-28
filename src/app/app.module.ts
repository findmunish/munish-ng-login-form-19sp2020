import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EvalAssignment19Sep2020Component } from './eval-assignment-19-sep-2020/eval-assignment-19-sep-2020.component';
import { DisplayFetchedCustomersComponent } from './display-fetched-customers/display-fetched-customers.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FetchHttpComponent } from './fetch-http/fetch-http.component';
import { FetchCustomersComponent } from './fetch-customers/fetch-customers.component';
import { CustomerDataServiceService } from './customer-data-service.service';
import { ShowusersComponent } from './showusers/showusers.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, EvalAssignment19Sep2020Component, DisplayFetchedCustomersComponent, LoginFormComponent, FetchHttpComponent, FetchCustomersComponent, ShowusersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CustomerDataServiceService]
})
export class AppModule { }
