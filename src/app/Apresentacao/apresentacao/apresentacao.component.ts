import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apresentacao',
  imports: [],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.scss'
})
export class ApresentacaoComponent {

  constructor(private router:Router){}
  
  login(){
    this.router.navigate(['/login'])
  }
}
