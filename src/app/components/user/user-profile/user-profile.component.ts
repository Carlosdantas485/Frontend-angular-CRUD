import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Users } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: Users = {
    userName:"",
    password:"",
    rePassword: "",
    cpf: null,
    phone: null,
    balance:null,
    url:""
  }

  constructor( 
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id === null){
      throw Error;
    }
    this.userService.listbyUser(id).subscribe((user)=>{
      this.user = user;
    })
  }

}
