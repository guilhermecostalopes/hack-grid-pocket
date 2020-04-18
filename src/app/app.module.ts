import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material-module/material.module';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import { FlatpickrModule } from 'angularx-flatpickr';
import 'core-js';
import 'hammerjs';
import * as moment from 'moment';
import { CalendarioModule } from './components/calendario/calendario.module';
import { DashboardsModule } from './components/dashboards/dashboards.module';
import { TaskboardModule } from './components/taskboard/taskboard.module';

import { MenuItems } from './shared/menu-items/menu-items';

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
    MenuItems,
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
