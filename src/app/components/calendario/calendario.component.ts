import { Component, ChangeDetectionStrategy, Inject, ViewChild, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
//import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-calendar-dialog',
  template: `
  <h4 class="m-t-0">Event action occurred</h4>
  <div>
    Action:
    <pre>{{ data?.action }}</pre>
  </div><br/>
  <div>
    Event:

  </div><br/>
  <button mat-raised-button color="primary"  (click)="dialogRef.close()">Close dialog</button>`
})
export class CalendarDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { Subject } from 'rxjs';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig, MatDialog } from '@angular/material/dialog';

const colors: any = {
  red: {
    primary: '#fc4b6c',
    secondary: '#f9e7eb'
  },
  blue: {
    primary: '#1e88e5',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#ffb22b',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendario',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {

  dialogRef: MatDialogRef<CalendarDialogComponent>;
  lastCloseResult: string;
  actionsAlignment: string;
  config: MatDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      action: '',
      event: []
    }
  };
  numTemplateOpens = 0;

  view = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string,
    event: CalendarEvent
  };

  actions: CalendarEventAction[] = [{
    label: '<i class="ti-pencil act"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.handleEvent('Edited', event);
    }
  }, {
    label: '<i class="ti-close act"></i>',
    onClick: ({event}: {event: CalendarEvent}): void => {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.handleEvent('Deleted', event);
    }
  }];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [{
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  }, {
    start: startOfDay(new Date()),
    title: 'An event with no end date',
    color: colors.yellow,
    actions: this.actions
  }, {
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    title: 'A long event that spans 2 months',
    color: colors.blue
  }, {
    start: addHours(startOfDay(new Date()), 2),
    end: new Date(),
    title: 'A draggable and resizable event',
    color: colors.yellow,
    actions: this.actions,
    resizable: {
      beforeStart: true,
      afterEnd: true
    },
    draggable: true
  }];

  activeDayIsOpen = true;

  constructor(public dialog: MatDialog, @Inject(DOCUMENT) doc: any) {}

  dayClicked({date, events}: {date: Date, events: CalendarEvent[]}): void {

    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.config.data = {event, action};
    this.dialogRef = this.dialog.open(CalendarDialogComponent, this.config);

    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}
