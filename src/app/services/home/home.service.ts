import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import "rxjs/add/operator/map";
import { constantes } from "../../utilitis/constantes";

@Injectable()
export class HomeService {
  private constantes;
  private url;

  constructor(private http: HttpClient) {
    this.constantes = new constantes();
  }

  create(params) {
    this.url = this.constantes.getRouterGlobal() + "home/create";

    return this.http.post(this.url, params).map(res => console.log(res));
  }

  
}