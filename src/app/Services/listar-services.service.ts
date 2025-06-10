import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enviroments } from '../Enviroments/enviroments';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ListarServicesService {
  constructor() { }

  http = inject(HttpClient); 

  listar():Observable<any>{
    return this.http.get(Enviroments.API_URL+`/cadastroGasto/listaGastos`)
  }
}
