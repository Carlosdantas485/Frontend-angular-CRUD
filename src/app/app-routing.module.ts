import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"users",
    component: UserReadComponent
  },
  {
    path:"users/create",
    component: UserCreateComponent
  },
  {
    path:"users/update/:id",
    component: UserUpdateComponent
  },
  {
    path:"users/delete/:id",
    component: UserDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
