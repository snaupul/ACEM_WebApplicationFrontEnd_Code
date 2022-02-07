import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitySignUpFormComponent } from './activity-sign-up-form/activity-sign-up-form.component';
import { UsersDataListingComponent } from './users-data-listing/users-data-listing.component';
import {SharedApiService} from './Shared/shared-api.service'

import {HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ActivitySignUpFormComponent,
    UsersDataListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [SharedApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
