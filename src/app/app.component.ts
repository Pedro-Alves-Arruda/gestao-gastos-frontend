import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CadastroComponent } from "./components/cadastro/cadastro.component";
import { MenuComponent } from "./components/menu/menu.component";
import { HomeComponentComponent } from './home-component/home-component.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, LoginComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestao_gastos';

  constructor(private router:Router){}

  isLoginPage(): boolean {
    return this.router.url === '/';
  }

}
