import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl  } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any;
  username!: string; 
  password!: string;
  loginValid =  false;
  formulario!: FormGroup;

  title = "CarlosDAnats"

  constructor( private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.router.navigate(['/home'])
  }

  clear(){
    localStorage.clear()
  }

  salvar(){
    if(this.username == "carlosdantas485@gmail.com" && this.password == "Carlos@100"){
      localStorage.setItem("token", "987654321");
      location.reload();
    }else{
      this.loginValid = true;
    }
    this.router.navigate(['/home'])

    console.log("passou")
    
  }

 
}
