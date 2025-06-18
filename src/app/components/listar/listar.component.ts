import { Component, ViewChild } from '@angular/core';
import { ListarServicesService } from '../../Services/listar-services.service';
import { HomeComponentComponent } from '../../home-component/home-component.component';
import { CommonModule } from '@angular/common';
import { NotaFiscalDTO } from '../cadastro/cadastroGastoDTO';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CadastroServices } from '../../Services/cadastro-services.service';
import { AuthService } from '../../AuthService';
import { WebSocketServicesService } from '../../Services/web-socket-services.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; 


@Component({
  selector: 'app-listar',
  imports: [HomeComponentComponent, CommonModule, MatIconModule, FormsModule, AuthService, MatTableModule, MatPaginatorModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.scss'
})
export class ListarComponent {
  
  constructor(private services: ListarServicesService, 
    private editarServices:CadastroServices, 
    private authService: AuthService,
    private webSocket:WebSocketServicesService){}
    
  @ViewChild(MatPaginator) paginator!: MatPaginator;
    
  dataSource = new MatTableDataSource<NotaFiscalDTO>();
    
  displayedColumns: string[] = [];

  ngOnInit(){
    this.displayedColumns = ['Estabelecimento', 'Valor', 'Data'];
    this.buscarGastos();
    this.usuarioLogado = this.authService.getUsuarioLogado();

    this.webSocket.novoGastoSubject.subscribe((gasto) => {
      this.ngOnInit()
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  isEdicao = false;
  isSalvar = false
  
  usuarioLogado:any
  
  gastos?:any
  
  gastosEditado:any = {
    id:null,
    valor:'',
    data: Date.now,
    estabelecimento: '',
    usuario: ''
  }
  

  formataData(data:any){
    return new Date(data[0], data[1] - 1, data[2], data[3], data[4])
    .toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
    })
  }

  AlteraStatusisSalvar(){
    this.isSalvar = true;
    this.isEdicao = false
  }
  
  carregaValor(gasto:any){
    this.isEdicao = true
    this.isSalvar = false
    gasto.data = this.parseDataFormatada(gasto.data) 
    this.gastosEditado.id = gasto.id
    this.gastosEditado = gasto
  }

  parseDataFormatada(dataStr: any): String {
    let mes = dataStr[1].toString().length == 1 ? 0 + dataStr[1].toString() : dataStr[1]
    let dia = dataStr[2].toString().length == 1 ? 0 + dataStr[2].toString() : dataStr[2]
    let hora = dataStr[3].toString().length == 1 ? 0 + dataStr[3].toString() : dataStr[4]
    let minuto = dataStr[4].toString().length == 1 ? 0 + dataStr[3].toString() : dataStr[4]
    
    return `${dataStr[0]}-${mes}-${dia}T${hora}:${minuto}`;;
  }

  editarGasto(){
    this.gastosEditado.usuario = this.usuarioLogado.email
    this.gastosEditado.data = new Date(this.gastosEditado.data)

    this.editarServices.editarGasto(this.gastosEditado)
    .subscribe(res => {
      if(res)this.ngOnInit()
    })
  }

  
  salvarGasto(){
    this.gastosEditado.usuario = this.usuarioLogado.email
    this.gastosEditado.data = new Date(this.gastosEditado.data)
    
    this.editarServices.salvarGasto(this.gastosEditado)
    .subscribe(res => {
      this.buscarGastos()
    })
  }

  buscarGastos(){
    return this.services.listar()
    .subscribe(res =>{
      this.gastos = res;
      this.dataSource.data = this.gastos;
    })
  }

  deletarGasto(){
    this.gastosEditado.data = new Date(this.gastosEditado.data)
    this.editarServices.deletarGasto(this.gastosEditado)
    .subscribe(response => {
      if(response == "OK")
        this.ngOnInit()
    })
  }

}
