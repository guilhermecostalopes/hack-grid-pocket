import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { ChartsModule } from 'ng2-charts';
import { momentAdapterFactory } from 'src/app/app.module';
import { MaterialModule } from 'src/app/core/material-module/material.module';
import { CalendarioComponent } from './calendario.component';
import { CalendarioRoutes } from './calendario.routing';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ChartsModule,
    RouterModule.forChild(CalendarioRoutes),
    PerfectScrollbarModule,
    //CalendarDateFormatter,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  declarations: [ CalendarioComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CalendarioModule {}
