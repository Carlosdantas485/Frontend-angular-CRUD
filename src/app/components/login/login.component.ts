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

  formulario!: FormGroup;

  constructor( private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nameHeader: new FormControl(null),
      emailHeader: new FormControl(null)
    });

    this.formulario = this.formBuilder.group({
      nameHeader: [null],
      emailHeader: [null]
    });
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
