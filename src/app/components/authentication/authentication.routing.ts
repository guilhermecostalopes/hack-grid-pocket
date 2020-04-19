import { Routes } from '@angular/router';
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
      }
    ]
  }
];
