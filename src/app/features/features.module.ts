import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeaturesRoutingModule } from './features-routing.module';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProfileComponent } from './components/profile/profile.component'; 
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';


@NgModule({
  declarations: [
    AllUsersComponent,
    ProfileComponent,
    AddUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    RouterModule,
    MatTableModule,
    MatSnackBarModule,
    MatInputModule,
    SharedModule
  ],

})
export class FeaturesModule { 
}
