import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';
import { ListarComponent } from './components/listar/listar.component';
import { AppComponent } from './app.component';
import { ApresentacaoComponent } from './Apresentacao/apresentacao/apresentacao.component';

export const routes: Routes = [

    
    {
        path:'', component: ApresentacaoComponent
    },
    {
        path:'login', component:LoginComponent
    },
    {
        path:"home", component:HomeComponentComponent, children : [
            {
                path:"cadastro-gasto", component:CadastroComponent,
            },
            {
                path:"listar", component:ListarComponent
            }

        ]
    }
];
