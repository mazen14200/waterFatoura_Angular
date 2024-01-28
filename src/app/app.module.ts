import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewSubscriberComponent } from './Features/Subscriber/add-new-subscriber/add-new-subscriber.component';
import { GetSingleSubscriperComponent } from './Features/Subscriber/get-single-subscriper/get-single-subscriper.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSubscriptionComponent } from './Features/Subscription/add-subscription/add-subscription1.component';
import { AddNewInvoiceComponent } from './Features/Invoices/add-new-invoice/add-new-invoice.component';
import { GetAllInvoicesComponent } from './Features/Invoices/get-all-invoices/get-all-invoices.component';


@NgModule({
  declarations: [
    AppComponent,
    AddNewSubscriberComponent,
    GetSingleSubscriperComponent,
    AppComponent,
    AddSubscriptionComponent,
    AddNewInvoiceComponent,
    GetAllInvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
