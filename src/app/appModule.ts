import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "./components/menu/menu.component";
import { HomeComponentComponent } from './home-component/home-component.component';
import { AppComponent } from "./app.component";
import { provideHttpClient  } from '@angular/common/http';
import { LoginComponent } from "./login/login.component";
import { ListarComponent } from "./components/listar/listar.component";



@NgModule({
    imports: [ FormsModule,MenuComponent, HomeComponentComponent, LoginComponent, AppComponent, ListarComponent],
    exports: [MenuComponent, HomeComponentComponent, LoginComponent, AppComponent],
    providers:[provideHttpClient()]
})

export class appModule{

}