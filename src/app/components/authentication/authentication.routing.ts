import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';

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
      }
    ]
  }
];
