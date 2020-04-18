import * as $ from 'jquery';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import { FlatpickrModule } from 'angularx-flatpickr';
import 'core-js';
import 'hammerjs';
import * as moment from 'moment';
import { ChartistModule } from 'ng-chartist';
import { DragulaModule } from 'ng2-dragula';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarHeaderComponent } from './components/calendario/calendar-header.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { FullComponent } from './components/layouts/full/full.component';
import { MenuItems } from './components/shared/menu-items/menu-items';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { MaterialModule } from './core/material-module/material.module';
import { DashboardsModule } from './components/dashboards/dashboards.module';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    CalendarioComponent,
    CalendarHeaderComponent,
    TaskboardComponent
  ],
  imports: [
    DashboardsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    CommonModule,
    FormsModule,
    NgbModalModule,
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
    MaterialModule,
    DragulaModule.forRoot(),
    FlexLayoutModule,
    PerfectScrollbarModule,
    ChartistModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  providers: [MenuItems],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
