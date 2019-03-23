import { Component, OnInit } from '@angular/core';
import { AdministratorService }      from "../../services/administrator/administrator.service";
import {administratormodel }      from "../../models/administrator.model";

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css'],
  providers: [AdministratorService]
})
export class AdministratorComponent implements OnInit {
  public administratormodel;
  public rows;
  public rows1;
  public data;
  public data1;
  public data2;
  public data3;
  public data4;
  public data5;
  public data6;
  public data7;
  public data8;
  public data9;
  public data10;
  public data11;


  constructor(
    private AdministratorService: AdministratorService
  ) { this.administratormodel = new administratormodel() }

  ngOnInit() {
  }

  search(){
    let params= {data:this.administratormodel}
console.log(this.administratormodel)
    this.AdministratorService.search(params).subscribe(result=>{
      this.rows=result;
      this.rows1=this.rows.search;
    },error=>{})
  }


  btn_update(index: number, row: any){

     this.data={
       eproblem:row.problema,
       epriority:this.administratormodel.priority = row.prioridad,
       edescription:this.administratormodel.description = row.descripcion,
       enombre:row.nombre,
       efecha:row.fecha,
       email:row.correo,
       ephone:row.telefono,
       eestado:this.administratormodel.state = row.estado,
       idpet:row.id,
       eobs:this.administratormodel.observation = row.obs
      }
      
   } 
    
   btn_file(index: number, row: any){


    this.data1={
      eproblem:row.problema,
      epriority:row.prioridad,
      edescription:row.descripcion,
      ename:row.nombre,
      edate:row.fecha,
      email:row.correo,
      ephone:row.telefono,
      estate:row.estado,
      idpet:row.id,
      eobs:row.obs
     }
     this.data2=this.data1.idpet;
     this.data3=this.data1.eproblem;
     this.data4=this.data1.epriority;
     this.data5=this.data1.edescription;
     this.data5=this.data1.ename;
     this.data6=this.data1.edate;
     this.data7=this.data1.email;
     this.data8=this.data1.ephone;
     this.data9=this.data1.estate;
     this.data10=this.data1.eobs;

  } 


   update(){
    let params = {env:this.administratormodel , data:this.data.idpet}
    console.log(params)
    this.AdministratorService.update(params).subscribe(result=>{},error=>{})
    this.search()
   }

}
