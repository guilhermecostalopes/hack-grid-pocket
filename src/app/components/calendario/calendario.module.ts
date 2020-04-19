import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { momentAdapterFactory } from 'src/app/app.module';
import { MaterialModule } from 'src/app/core/material-module/material.module';
import { CalendarioComponent } from './calendario.component';
import { CalendarioRoutes } from './calendario.routing';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';
import { CalendarHeaderComponent } from './calendar-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(CalendarioRoutes),
    PerfectScrollbarModule,
    //CalendarDateFormatter,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  declarations: [ CalendarioComponent, CalendarHeaderComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CalendarioModule {}
