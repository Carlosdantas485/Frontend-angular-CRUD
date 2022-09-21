import { Component, OnInit } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  
  profileForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(): void{
    
    this.router.navigate(['/home'])
    console.log(localStorage.setItem("username", "carlos"));
  }


  clear(){
    localStorage.clear()
    console.log(localStorage.getItem("username"));

  }
}
