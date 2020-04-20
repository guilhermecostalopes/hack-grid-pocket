import { Component, ViewChild } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent  {

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Reunião', start: new Date() },
    { title: 'Reunião', start: new Date("2020-04-20T20:56:00Z") },
    { title: 'Reunião', start: new Date("2020-04-21T20:56:00Z") },
    { title: 'Reunião', start: new Date("2020-04-22T20:56:00Z") },
    { title: 'Reunião', start: new Date("2020-04-23T20:56:00Z") },
    { title: 'Reunião', start: new Date("2020-04-24T20:56:00Z") },
    { title: 'Reunião', start: new Date("2020-04-25T20:56:00Z") },
    { title: 'Reunião', start: new Date("2020-04-26T20:56:00Z") },
    { title: 'Reunião', start: new Date("2020-04-27T20:56:00Z") },
    { title: 'Reunião', start: new Date("2020-04-28T20:56:00Z") },
  ];

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }
}
