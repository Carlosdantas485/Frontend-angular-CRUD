import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginValid =true;
  id = "1";
  userName!: string;
  
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

 
  constructor(private appComponent: AppComponent, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.appComponent.title;
  }

  someMethod() {
    this.trigger.openMenu();
  }

  loginPage(){
    this.router.navigate(['/'])
  }

  exit(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
}
