import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';

export const IteracoesRoutes: Routes = [
  {
       path: 'mensagens',
       component: MensagensComponent
  },
  {
    path: 'notificacoes',
    component: NotificacoesComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  }
 ];
