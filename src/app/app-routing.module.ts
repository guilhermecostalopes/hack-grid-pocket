import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { FullComponent } from './components/layouts/full/full.component';

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
        loadChildren: './components/calendario/calendario.module#TaskboardModule'
      }
    ]
  }
  /*
  {
    path: "taskboard",
    component: TaskboardComponent
  }*/
];

/*
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/
