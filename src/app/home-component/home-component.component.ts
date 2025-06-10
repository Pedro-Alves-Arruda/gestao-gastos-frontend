import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

  constructor(private router:Router){}

  direcionaRotaCadastro(){
    this.router.navigate(['/cadastro-gasto'])
  }

  direcionaRotaListar(){
    this.router.navigate(['/listar'])
  }
}
