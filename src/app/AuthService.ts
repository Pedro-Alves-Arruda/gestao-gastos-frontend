import { Injectable, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';

@NgModule()

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_KEY = 'user';
  
  login(usuario: any) {
    const user = { nome: usuario.nome, token: '', email:usuario.email, roles: usuario.roles, id: usuario.id};
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.USER_KEY);
  }

  getUsuarioLogado() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  isAutenticado(): boolean {
    return this.getUsuarioLogado() !== null;
  }
}
