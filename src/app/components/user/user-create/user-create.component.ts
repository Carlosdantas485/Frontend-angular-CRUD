import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { FormBuilder  } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  hide = true;
  
  data: any;
  
  profileForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    rePassword: ['', Validators.required],
    phone: ['', Validators.required],
    cpf: ['', Validators.required],
    balance: ['', Validators.required],
    url: ['', Validators.required],
  });
  constructor(public userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value.password);

    this.data = this.profileForm.value;
    this.userService.createUser(this.data).subscribe(()=>{
      this.userService.showMesage('Usuário criado com sucesso!')
      this.router.navigate(['/users'])
    })
  }
}
