import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MaterialModule } from 'src/app/core/material-module/material.module';
import { CalendarioComponent } from './calendario.component';
import { CalendarioRoutes } from './calendario.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(CalendarioRoutes),
    PerfectScrollbarModule,
    //CalendarDateFormatter,
    FullCalendarModule,
    //CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  declarations: [ CalendarioComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CalendarioModule {}
