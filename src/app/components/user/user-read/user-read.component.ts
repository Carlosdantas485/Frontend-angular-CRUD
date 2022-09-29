import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../user.model';
@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})

export class UserReadComponent implements OnInit {
  showModal = false;
  users!: Users[];
  searchName!:  string;
  idDelet!: number;

  displayedColumns = ['id','url', 'name','cpf', 'price', 'action']

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.showUsers();
   
  }

  setIdDelete(id:number){
    this.idDelet = id;
    this.toggleModal()
  }

  toggleModal(){
    if (this.showModal == true){
      this.showModal = false;
    }
    else{
      this.showModal = true;
    }
  }

  showUsers():void{
    this.userService.listUsers().subscribe(user=>{
      this.users = user;
    })
  }

  delete(): void{
    this.userService.deleteUser(this.idDelet).subscribe(user => {
      this.showUsers();
      this.userService.showMesage("Usuário deletado com sucesso !");
    })
  }


}
