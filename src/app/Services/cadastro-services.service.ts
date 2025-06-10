import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enviroments } from '../Enviroments/enviroments';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { NotaFiscalDTO } from '../components/cadastro/cadastroGastoDTO';

@Injectable({
  providedIn: 'root'
})
export class CadastroServices {

  constructor() {
  }
  
  http = inject(HttpClient); 

  salvarGasto(gasto:NotaFiscalDTO) : Observable<any>{
    return this.http.post(Enviroments.API_URL+`/cadastroGasto/novo`, gasto)
  }

  editarGasto(gasto:NotaFiscalDTO) : Observable<any>{
    return this.http.put(Enviroments.API_URL+`/cadastroGasto`, gasto)
  }

  deletarGasto(gasto:NotaFiscalDTO) : Observable<any>{
    let options = {
      body: gasto
    }
    return this.http.delete(Enviroments.API_URL+`/cadastroGasto`, options)
  }
}
