import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/material-module/material.module';
import { TaskboardComponent } from './taskboard.component';
import { TaskboardRoutes } from './taskboard.routing';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DragulaModule.forRoot(),
    RouterModule.forChild(TaskboardRoutes)
  ],
  declarations: [ TaskboardComponent ]
})

export class TaskboardModule {}
