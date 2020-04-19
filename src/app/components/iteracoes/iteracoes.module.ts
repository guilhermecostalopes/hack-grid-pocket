import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';
import { MaterialModule } from 'src/app/core/material-module/material.module';
import { ChatComponent } from './chat/chat.component';
import { IteracoesRoutes } from './iteracoes.routing';
import { MensagensComponent } from './mensagens/mensagens.component';
import { NotificacoesComponent } from './notificacoes/notificacoes.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DragulaModule.forRoot(),
    RouterModule.forChild(IteracoesRoutes)
  ],
  declarations: [ MensagensComponent, NotificacoesComponent, ChatComponent]
})

export class IteracoesModule {}
