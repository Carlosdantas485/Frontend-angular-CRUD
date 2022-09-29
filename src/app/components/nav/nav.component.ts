import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginValid = false ;

  token = localStorage.getItem("token")?.toString;
    

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    
    let token = localStorage.getItem("token");

    if(token === "987654321" ){
      this.loginValid = true
    }

  }

}
