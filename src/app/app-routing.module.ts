import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';

const routes: Routes = [
  {
    path: "calendario",
    component: CalendarioComponent
  },
  {
    path: "taskboard",
    component: TaskboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
