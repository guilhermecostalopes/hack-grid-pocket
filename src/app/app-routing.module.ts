import { Routes } from '@angular/router';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes =
[
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboards',
        pathMatch: 'full'
      },
      {
        path: 'dashboards',
        loadChildren: './components/dashboards/dashboards.module#DashboardsModule'
      },
      {
        path: 'calendario',
        loadChildren: './components/calendario/calendario.module#CalendarioModule'
      },
      {
        path: 'taskboard',
        loadChildren: './components/taskboard/taskboard.module#TaskboardModule'
      },
      {
        path: 'vendas',
        loadChildren: './components/vendas/vendas.module#VendasModule'
      }
    ]
  },
  {
    path: '',
    component: AppBlankComponent,
    children:
    [
      {
        path: 'authentication',
        loadChildren: './components/authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];
