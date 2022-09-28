import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from'@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from'@angular/material/list';
import { MatButtonModule } from'@angular/material/button';
import { MatSnackBarModule } from'@angular/material/snack-bar';
import { MatFormFieldModule }from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';

import { MatMenuModule } from '@angular/material/menu';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserReadComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatBadgeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
