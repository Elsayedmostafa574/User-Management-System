import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './features/components/all-users/all-users.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { authGuard } from './guards/auth.guard';
import { ProfileComponent } from './features/components/profile/profile.component';
import { AddUserComponent } from './features/components/add-user/add-user.component';
import { UpdateUserComponent } from './features/components/update-user/update-user.component';

const routes: Routes = [
 {
  path: 'sidebar' , component: SidebarComponent , canActivate: [authGuard],
  children : [
    {
      path: 'users' , component: AllUsersComponent
    },
    {
      path: 'profile/:id' , component : ProfileComponent
    },
    {
      path : 'addUser' , component : AddUserComponent
    },
    {
      path : 'updateUser/:id' , component : UpdateUserComponent
    }
  ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
