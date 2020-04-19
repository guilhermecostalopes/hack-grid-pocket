import { Routes } from '@angular/router';
import { Erro404Component } from './erro404/erro404.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

export const AuthenticationRoutes: Routes =
[
  {
    path: '',
    children:
    [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'esqueceu-senha',
        component: EsqueceuSenhaComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: '404',
        component: Erro404Component
      }
    ]
  }
];
