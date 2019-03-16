import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { constantes } from "../../utilitis/constantes";

@Injectable()
export class SupportService {
  private constantes;
  private url;

  constructor(private http: HttpClient) {
    this.constantes = new constantes();
  }
  save(params) {
    this.url = this.constantes.getRouterGlobal() + "support/save";
    return this.http.post(this.url, params).pipe(map(res => res));
  }
  
}