import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  constructor(
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  user: Users = {
    userName:"",
    password:"",
    rePassword: "",
    cpf: null,
    phone: null,
    balance:null,
    url:""
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id === null){
      throw Error;
    }
    this.userService.listbyUser(id).subscribe((user)=>{
      this.user = user;
    })
  }

  update(): void {
    this.userService.updateUser(this.user).subscribe(() => {
      this.userService.showMesage("Usuário atualizado com sucesso !");
      this.router.navigate(["/"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/"]);
  }

}
