import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginServicesService } from '../Services/login-services.service';
import { AuthService } from '../AuthService';
import { RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule, AuthService, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private services:LoginServicesService, private authService:AuthService, private router:Router){}

  usuarioLogado:any

  usuario = {
    email : '',
    password: ''
  }

  login(){
    this.services.login(this.usuario)
    .subscribe(res => {
      this.verificaAutenticado(res)
    })
  }

  loginComGoogle(){
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }

  verificaAutenticado(res: any){
    if(res.email && res.id){
      this.authService.login(res);
      this.router.navigate(['/home'])
    }
  }



}
