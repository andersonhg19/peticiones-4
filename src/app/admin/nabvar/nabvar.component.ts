import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {
public user_name;
public password;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.ValidateSession();
    this.getUserName();
  }

  sesionDestroy() {
    localStorage.clear();
  }

  ValidateSession() {
    let session = localStorage.getItem("user");
    if (!session) this.router.navigate(["/"]);
  }

  getUserName() {
    let name = JSON.parse(localStorage.getItem("user"));
    this.user_name = name.nombre;
  }

  validate_pas() {
    let key = this.password;
    if (key==="Sistemas2019*") this.router.navigate(["/admin/administrator"]);
    else this.router.navigate(["/"]);
  }

}
