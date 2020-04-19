import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
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
import {
  PerfectScrollbarConfigInterface, PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { CalendarioModule } from './components/calendario/calendario.module';
import { DashboardsModule } from './components/dashboards/dashboards.module';
import { TaskboardModule } from './components/taskboard/taskboard.module';
import { MaterialModule } from './core/material-module/material.module';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';

export function momentAdapterFactory() {
  return adapterFactory(moment);
};

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppSidebarComponent,
    AppHeaderComponent,
    AppBlankComponent
  ],
  imports: [
    AuthenticationModule,
    SharedModule,
    TaskboardModule,
    DashboardsModule,
    CalendarioModule,
    RouterModule.forRoot(AppRoutes, { useHash: true }),
    CommonModule,
    FormsModule,
    NgbModalModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },{
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
