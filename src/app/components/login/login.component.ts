import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName:'',
      password:''
    })
  }

  login(){
    console.log(this.loginForm.get('userName').value)
    console.log(this.loginForm.get('password').value)
    // let username = this.loginForm.get('userName').value;
    // let password = this.loginForm.get('password').value;
    // let data = { name:username,password:password}

  }

}
