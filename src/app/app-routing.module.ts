import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersDataListingComponent} from './users-data-listing/users-data-listing.component';
import {ActivitySignUpFormComponent} from './activity-sign-up-form/activity-sign-up-form.component';

const routes: Routes = [
  {path:'SignUp',component: ActivitySignUpFormComponent},
  {path:'usersList',component:UsersDataListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
