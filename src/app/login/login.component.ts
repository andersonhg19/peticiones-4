import { Component, OnInit } from '@angular/core';
import { loginmodel } from "../models/login.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public loginmodel = new loginmodel();


  constructor() { 


  }

  ngOnInit() {
   
    console.log( this.loginmodel)
  }

}
