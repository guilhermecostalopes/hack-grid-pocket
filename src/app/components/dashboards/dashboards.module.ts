import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardsRoutes } from './dashboards.routing';
import { ChartistModule} from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from 'src/app/core/material-module/material.module';
import { DashboardsComponent } from './dashboards.component';

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
