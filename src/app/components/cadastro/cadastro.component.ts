import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';
import { CadastroServices } from '../../Services/cadastro-services.service';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { AuthService } from '../../AuthService';
import { appModule } from "../../appModule";
import { HomeComponentComponent } from "../../home-component/home-component.component";
import { Router } from '@angular/router';


@Component({
  imports: [MenuComponent, FormsModule, AuthService, HomeComponentComponent, appModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {


  constructor(private services:CadastroServices, private authService: AuthService, private route:Router) {}

  usuarioLogado:any

  ngOnInit(): void {
    this.usuarioLogado = this.authService.getUsuarioLogado();
  }

  gasto = {
    valor:'',
    estabelecimento:'',
    data: new Date('2025-05-19T15:30'),
    usuario:'',
  }

  salvarGasto(){
    this.gasto.usuario = this.usuarioLogado.nome

    this.services.salvarGasto(this.gasto)
    .subscribe(response => {
      this.route.navigate(['listar']);
    })
  }

}
