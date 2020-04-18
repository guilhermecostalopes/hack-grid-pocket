import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from 'src/app/core/material-module/material.module';
import { DashboardsComponent } from './dashboards.component';
import { DashboardsRoutes } from './dashboards.routing';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,
    RouterModule.forChild(DashboardsRoutes)
  ],
  declarations: [ DashboardsComponent ]
})

export class DashboardsModule {}
