import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
    public config: PerfectScrollbarConfigInterface = {};

    notifications: any[] = [
      {
        round: 'round-success',
        icon: 'ti-calendar',
        title: 'Evento hoje',
        subject: 'Apenas um lembrete de que você tem evento !',
        time: '12:00'
      },
      {
        round: 'round-danger',
        icon: 'ti-link',
        title: 'Iniciar venda',
        subject: 'Cliente pede para finalizar a venda !',
        time: '12:00'
      }, {
        round: 'round-success',
        icon: 'ti-calendar',
        title: 'Evento hoje',
        subject: 'Apenas um lembrete de que você tem evento !',
        time: '11:00'
      }, {
        round: 'round-info',
        icon: 'ti-settings',
        title: 'Configurações',
        subject: 'Você pode personalizar este modelo como quiser !',
        time: '09:00'
      }, {
        round: 'round-primary',
        icon: 'ti-user',
        title: 'Uma possível venda está para acontecer !',
        subject: 'Vai ao canal de Vendas !',
        time: '08:00'
      }
    ];

    mymessages: any[] = [
      {
        useravatar: 'assets/images/users/5.jpg',
        status: 'online',
        from: 'Victor Lourenço',
        subject: 'Te enviei uma mensagem pelo sistema',
        time: '9:30 AM'
      }, {
        useravatar: 'assets/images/users/2.jpg',
        status: 'busy',
        from: 'Annie ',
        subject: 'Pode finalizar a venda do seguro ?',
        time: '9:10 AM'
      }, {
        useravatar: 'assets/images/users/d1.jpg',
        status: 'away',
        from: 'Bruno César',
        subject: 'Sou novo por aqui, pode me ajudar ?',
        time: '9:08 AM'
      }, {
        useravatar: 'assets/images/users/d2.jpg',
        status: 'offline',
        from: 'Jorge Luiz',
        subject: 'Estamos lhe aguardando na reunião !',
        time: '9:00 AM'
      }, {
        useravatar: 'assets/images/users/1.jpg',
        status: 'offline',
        from: 'Addae do Carmo',
        subject: 'Estamos lhe aguardando na reunião !',
        time: '9:00 AM'
      }
    ];
}
