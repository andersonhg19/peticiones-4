import { Component, OnInit } from '@angular/core';
import { homemodel }         from "../../models/home.model";
import { HomeService }      from "../../services/home/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HomeService]
})
export class HomeComponent implements OnInit {
  public homemodel;
  public name;
  public temp;

  
  constructor(
    private HomeService:HomeService,
  ) { this.homemodel = new homemodel() }

  ngOnInit() {
    this.temp = JSON.parse(localStorage.getItem("user"));
    
    this.name = this.temp.nombre +" " +this.temp.apellido;
    console.log(this.name)
  }

  submit(){
    console.log(this.homemodel)
    let params = {data:this.homemodel,nombre:this.name}
    

    this.HomeService.create(params).subscribe(result=>{

    },error=>{})   
  }

}
