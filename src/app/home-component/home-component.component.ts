import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [RouterOutlet],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

  constructor(private router:Router){}

  direcionaRotaCadastro(){
    this.router.navigate(['/cadastro-gasto'])
  }

  direcionaRotaListar(){
    this.router.navigate(['/home/listar'])
  }
}
