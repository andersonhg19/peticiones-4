import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import "rxjs/add/operator/map";
import { constantes } from "../../utilitis/constantes";

@Injectable()
export class AdministratorService {
  private constantes;
  private url;

  constructor(private http: HttpClient) {
    this.constantes = new constantes();
  }

  search(params) {
    this.url = this.constantes.getRouterGlobal() + "administrator/search";
    return this.http.post(this.url, params).pipe(result=>result);
  }
  
  update(params) {
    this.url = this.constantes.getRouterGlobal() + "administrator/update";
    return this.http.post(this.url, params).pipe(result=>result);
  }
  
}