import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { momentAdapterFactory } from 'src/app/app.module';
import { MaterialModule } from 'src/app/core/material-module/material.module';
import { CalendarioComponent } from './calendario.component';
import { CalendarioRoutes } from './calendario.routing';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,
    RouterModule.forChild(CalendarioRoutes),
    //CalendarDateFormatter,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  declarations: [ CalendarioComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CalendarioModule {}
