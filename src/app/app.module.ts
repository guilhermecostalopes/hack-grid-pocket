import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
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
import { CalendarioModule } from './components/calendario/calendario.module';
import { DashboardsModule } from './components/dashboards/dashboards.module';
import { FullComponent } from './components/layouts/full/full.component';
import { MenuItems } from './components/shared/menu-items/menu-items';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { MaterialModule } from './core/material-module/material.module';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    TaskboardComponent
  ],
  imports: [
    DashboardsModule,
    CalendarioModule,
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
    ChartistModule
  ],
  providers: [MenuItems],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
