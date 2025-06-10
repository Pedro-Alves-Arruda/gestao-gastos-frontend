import { Injectable } from '@angular/core';
import { Client, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Subject } from 'rxjs';
import { Enviroments } from '../Enviroments/enviroments';

const socket = new SockJS(Enviroments.API_URL+'/ws');

@Injectable({
  providedIn: 'root'
})
export class WebSocketServicesService {
  
  private stompClient: Client;
  public novoGastoSubject = new Subject<any>();

  constructor() {
    this.stompClient = new Client({
      brokerURL: undefined,
      webSocketFactory: () => socket,
      connectHeaders: {},
      reconnectDelay: 5000,
    });

    this.stompClient.onConnect = () => {
      this.stompClient.subscribe('/topic/gastos', (message) => {
        console.log("recebendo mensagem do back" + message.body)
        const gasto = JSON.parse(message.body);
        this.novoGastoSubject.next(gasto);
      });
    };

    this.stompClient.activate();

   }
}
