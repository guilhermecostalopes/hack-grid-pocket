import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGrigPlugin from '@fullcalendar/timegrid';

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
    {id: '2020040120200404viagemseguroguilherme', title: 'Viagem do Guilherme Costa Lopes com seguro', start: '2020-04-01', end: '2020-04-04'},
    {id: '2020040120200404viagemsegurojoao', title: 'Viagem do João  Lopes com seguro', start: '2020-04-01', end: '2020-04-04'},
    {id: '2020040520200410viagemsegurojoana', title: 'Viagem de Sebastião', start: '2020-04-05', end: '2020-04-10'},
    {id: '2020040120200404viagemsegurojorge', title: 'Viagem do Tida Lopes com seguro', start: '2020-04-01', end: '2020-04-04'},
    {id: '2020040120200404viagemsegurohelena', title: 'Viagem do Helena Albergaria Lopes com seguro', start: '2020-04-01', end: '2020-04-04'},
    {id: '2020040120200404viagemsegurogustavo', title: 'Viagem do Gustavo Lopes com seguro', start: '2020-04-01', end: '2020-04-04'},
    {id: '2020040120200404viagemsegurorafael', title: 'Viagem do Rafael Lopes com seguro', start: '2020-04-01', end: '2020-04-04'},
    {id: '2020040120200404viagemsegurofernanda', title: 'Viagem do Fernanda Lopes com seguro', start: '2020-04-01', end: '2020-04-04'},

    {id: '2020041220200418viagemseguroguilherme', title: 'Viagem do Guilherme Costa Lopes com seguro', start: '2020-04-12', end: '2020-04-18'},
    {id: '2020041220200418viagemsegurojoao', title: 'Viagem do João  Lopes com seguro', start: '2020-04-12', end: '2020-04-18'},
    {id: '2020041220200418viagemsegurojoana', title: 'Viagem de Sebastião', start: '2020-04-12', end: '2020-04-18'},
    {id: '2020041220200418viagemsegurojorge', title: 'Viagem do Tida Lopes com seguro', start: '2020-04-12', end: '2020-04-18'},
    {id: '2020041220200418viagemsegurohelena', title: 'Viagem do Helena Albergaria Lopes com seguro', start: '2020-04-12', end: '2020-04-18'},
    {id: '2020041220200418viagemsegurogustavo', title: 'Viagem do Gustavo Lopes com seguro', start: '2020-04-12', end: '2020-04-18'},
    {id: '2020041220200418viagemsegurorafael', title: 'Viagem do Rafael Lopes com seguro', start: '2020-04-12', end: '2020-04-18'},
    {id: '2020041220200418viagemsegurofernanda', title: 'Viagem do Fernanda Lopes com seguro', start: '2020-04-12', end: '2020-04-18'},

    { title: 'Tim', start: new Date(), defId: 'saasdasdasd' },
    { title: 'Shawee', start: new Date("04/21/2020, 9:03 AM") },
    { title: 'Lider Seguros', start: new Date("04/21/2020, 11:03 AM") },
    { title: 'Seguradora BB', start: new Date("04/22/2020, 11:03 AM") },
    { title: 'Seguradora BB', start: new Date("04/23/2020, 11:03 AM") },
    { title: 'Brad Seguros', start: new Date("04/24/2020, 11:03 AM") },
    { title: 'Globo', start: new Date("04/25/2020, 14:03 AM") },
    { title: 'Seguradora BB', start: new Date("04/26/2020, 11:03 AM") },
    { title: 'Bandeirantes', start: new Date("04/26/2020, 09:03 AM") },
    { title: 'Grid 1', start: new Date("04/26/2020, 4:03 PM") },
    { title: 'Seguradora BB', start: new Date("04/26/2020, 02:03 PM") },
  ];
}
