import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Enviroments } from '../Enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor() {
  }
    
  http = inject(HttpClient);
  
  login(usuario:any): Observable<any>{
    return this.http.post(Enviroments.API_URL+`/login/VerificarLogin`, usuario)
  }

  loginComGoogle(): Observable<any>{
    return this.http.get(Enviroments.API_URL+`/login/google`)
  }
    
}
