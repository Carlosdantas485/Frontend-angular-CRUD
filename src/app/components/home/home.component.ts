import { UserService } from './../user/user.service';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Users } from '../user/user.model';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }

  users!: Users[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers():void{
    this.userService.listUsers().subscribe(user=>{
      this.users = user;
    })
  }
  visitProfile(id: number){

  }
}
