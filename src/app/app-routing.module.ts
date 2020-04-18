import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [{
    path: '',
    component: FullComponent,
    children: [
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
      }
    ]
  }
];
