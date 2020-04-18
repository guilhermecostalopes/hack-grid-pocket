import * as $ from 'jquery';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import { FlatpickrModule } from 'angularx-flatpickr';
import 'core-js';
import * as moment from 'moment';
import { DragulaModule } from 'ng2-dragula';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
//import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarHeaderComponent } from './components/calendario/calendar-header.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { MaterialModule } from './core/material-module/material.module';
import { DashboardsComponent } from './components/dashboards/dashboards.component';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    CalendarHeaderComponent,
    TaskboardComponent,
    DashboardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
    MaterialModule,
    DragulaModule.forRoot(),
    //QuillModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: momentAdapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
