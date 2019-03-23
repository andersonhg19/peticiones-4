import { Component, OnInit } from '@angular/core';
import { loginmodel } from "../models/login.model";
import { LoginService } from "../services/login/login.service";
import { Routes, Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

      public loginmodel = new loginmodel();
      public rows;

  constructor(
    private LoginService: LoginService,
    private router: Router,
  ) { 


  }

  ngOnInit() {
    this.validate_session();
  }

  login(){
    console.log(this.loginmodel)
    let params=this.loginmodel

      this.LoginService.login(params).subscribe(result=>{
        this.rows=result;

        if( this.rows.response==true){
          console.log('si')
          this.validate_auth(result);
        }else{
          console.log('no')
        
        }
    
      
    },error=>{})   
  }

  validate_auth(loginmodel) {
    console.log(loginmodel)
      let _user = JSON.stringify(loginmodel.result);
      localStorage.setItem("user", _user);
      this.validate_session();
  }

  validate_session() {
    let _user = localStorage.getItem("user");
    if (_user) this.router.navigate(["/admin"]);
    else this.router.navigate(["/"]);
  }


}
