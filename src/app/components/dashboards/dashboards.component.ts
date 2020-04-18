import { AfterViewInit, Component } from '@angular/core';
import * as Chartist from 'chartist';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';
declare var require: any;

const data: any = require('./data.json');

export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
}

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements AfterViewInit{

  // Barchart
  barChart1: Chart = {
      type: 'Bar',
      data: data['Bar'],
      options: {
          seriesBarDistance: 15,
          high: 12,
          axisX: {
              showGrid: false, offset: 20
          },
          axisY: {
              showGrid: true, offset: 40
          }
      },
      responsiveOptions: [
          [
              'screen and (min-width: 640px)',
              {
                  axisX: {
                      labelInterpolationFnc: function (value: number, index: number): string {
                          return index % 1 === 0 ? `${value}` : null;
                      }
                  }
              }
          ]
      ]
  };

  // This is for the donute chart
  donuteChart1: Chart = {
      type: 'Pie',
      data: data['Pie'],
      options: {
        donut: true,
        showLabel: false,
        donutWidth: 30

      }
      // events: {
      //   draw(data: any): boolean {
      //     return data;
      //   }
      // }
    };
  // This is for the line chart
  // Line chart
  lineChart1: Chart = {
      type: 'Line',
      data: data['LineWithArea'],
      options: {
        low: 0,
        high: 35000,
        showArea: true,
        fullWidth: true
      }
  };
   ngAfterViewInit(){
  //Sparkline chart
  var sparklineLogin = function () {
      // spark count
      (<any>$('.spark-count')).sparkline([4, 5, 0, 10, 9, 12, 4, 9, 4, 5, 3, 10, 9, 12, 10, 9, 12, 4, 9], {
          type: 'bar'
          , width: '100%'
          , height: '70'
          , barWidth: '2'
          , resize: true
          , barSpacing: '6'
          , barColor: 'rgba(255, 255, 255, 0.3)'
      });

  }
  var sparkResize;
  (<any>$(window)).resize(function(e) {
          clearTimeout(sparkResize);
          sparkResize = setTimeout(sparklineLogin, 500);
      });
  sparklineLogin();
   }
  // Timeline
  mytimelines: any[] = [{
  from: 'Nirav joshi',
  time: '(5 minute ago)',
  image: 'assets/images/users/1.jpg',
  attachment: 'assets/images/big/img2.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper'
}, {
  from: 'Sunil joshi',
  time: '(3 minute ago)',
  image: 'assets/images/users/2.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper',
  buttons: 'primary'
}, {
  from: 'Vishal Bhatt',
  time: '(1 minute ago)',
  image: 'assets/images/users/3.jpg',
  attachment: 'assets/images/big/img1.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper'
}, {
  from: 'Dhiren Adesara',
  time: '(1 minute ago)',
  image: 'assets/images/users/4.jpg',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper',
  buttons: 'warn'
}]; }
