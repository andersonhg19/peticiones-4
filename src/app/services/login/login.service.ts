
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { from } from 'rxjs';

import { constantes } from "../../utilitis/constantes";
@Injectable()
export class LoginService {
  private constantes;
  private url;

  constructor(private http: HttpClient) {
    this.constantes = new constantes();
  }

  save(params) {
    this.url = this.constantes.getRouterGlobal() + "support/save";
    return this.http.post(this.url, params).pipe(map(res => res.json()));

  
}}
