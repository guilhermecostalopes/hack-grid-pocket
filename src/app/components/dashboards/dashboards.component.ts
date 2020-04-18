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
  from: 'Addae do Carmo',
  time: '(1 minute ago)',
  image: 'assets/images/users/1.jpg',
  attachment: 'assets/images/big/img2.jpg',
  content: 'Considero o excelente suporte da ferramenta um dos seus diferenciais. As dúvidas durante a implantação foram poucas devido ao bom trabalho feito pela equipe. E se temos alguma dúvida durante as rotinas, isso é resolvido na hora de forma online.'
}, {
  from: 'Jorge Luiz',
  time: '(5 minute ago)',
  image: 'assets/images/users/d2.jpg',
  content: 'O processo de implantação foi muito bem planejado. Todas as parametrizações foram realizadas, bem como treinamentos específicos para cada área. O grande diferencial da solução é confiabilidade. Ganhamos muito com a automatização nos processos, vendas de seguros, venda de viagens, kits de produtos, produto composto, desconto progressivo, enfim, só evoluímos em produtividade.',
  buttons: 'primary'
}, {
  from: 'Bruno César',
  time: '(8 minute ago)',
  image: 'assets/images/users/d1.jpg',
  attachment: 'assets/images/big/img1.jpg',
  content: 'Os principais benefícios deste software para os corretores são a confiabilidade nas informações geradas e a inovação constante no processo de vendas de seguro. Com recursos inovadores, a solução facilita o dia a dia do operador primário do sistema até o mais alto nível de gerência de uma corretora.'
}, {
  from: 'Annie',
  time: '(10 minute ago)',
  image: 'assets/images/users/2.jpg',
  content: 'Este applicativo proporciona à nossa empresa de corretores extrema agilidade em seus atendimentos, sejam eles remotos, por telefone ou chat e assume total responsabilidade e compromisso perante ao fisco de cada estado.',
  buttons: 'warn'
}, {
  from: 'Victor Lourenço',
  time: '(11 minute ago)',
  image: 'assets/images/users/5.jpg',
  content: 'Os prazos propostos no início do projeto foram respeitados, passando segurança e transparência para meus clientes.'
}]; }
