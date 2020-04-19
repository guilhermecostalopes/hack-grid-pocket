import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}
export interface Saperator {
  name: string;
  type?: string;
}
export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  saperator?: Saperator[];
  children?: ChildrenItems[];
}

const MENUITEMS =
[
  {
    state: '',
    name: 'Menu principal',
    type: 'saperator',
    icon: 'av_timer'
  },
  {
    state: 'dashboards',
    name: 'Dashboard',
    type: 'sub',
    icon: 'av_timer',
    children:
    [
      {
        state: 'mostrar', name: 'Informações'
      }
    ]
  },
  {
    state: 'calendario',
    name: 'Calendário',
    type: 'sub',
    icon: 'today',
    children:
    [
      {
        state: 'pesquisar', name: 'Pesquisar'
      }
    ]
  },
  {
    state: 'taskboard',
    name: 'kanban',
    type: 'sub',
    icon: 'apps',
    children:
    [
      {
        state: 'pesquisar', name: 'Pesquisar'
      }
    ]
  },
  {
    state: 'vendas',
    name: 'Vendas',
    type: 'sub',
    icon: 'attach_money',
    children:
    [
      {
        state: 'pesquisar', name: 'Pesquisar'
      }
    ]
  },
  {
    state: 'iteracoes',
    name: 'Iterações',
    type: 'sub',
    icon: 'alarm',
    children:
    [
      {
        state: 'mensagens', name: 'Mensagens'
      },
      {
        state: 'notificacoes', name: 'Notificações'
      },
      {
        state: 'chat', name: 'Chat'
      }
    ]
  }
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
