import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss'],

})
export class DashboardsComponent implements AfterViewInit{

    public barChartOptions: ChartOptions = {
      responsive: true,
      scales: { xAxes: [{}], yAxes: [{}] },
    };
    public barChartData: ChartDataSets[] = [
      { data: [25000, 12500, 13500, 5000, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Vendas' },
      { data: [20000, 7500, 10500, 3000, 0, 0, 0, 0, 0, 0, 0, 0], label: 'Despesas' }
    ];

    public barChartLabels: Label[] = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"];

    public barChartLegend = true;

    public barChartType: ChartType = 'bar';

    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

    public doughnutChartLabels: string[] = [
        'Desktop',
        'Mobile',
        'Tablet'
    ];
    public doughnutChartOptions: any = {
        responsive: false
    };

    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string = 'doughnut';
    public doughnutChartLegend: boolean = false;

     ngAfterViewInit(){
        var sparklineLogin = function () {
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
         this.dataSource.paginator = this.paginator;
     }

    displayedColumns = ['position', 'name', 'viagens', 'email', 'nascimento'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    @ViewChild ( MatPaginator ) paginator: MatPaginator;
    mycomments: any[] =
    [
      {
        name: 'Addae do Carmo',
        content: 'Considero o excelente suporte da ferramenta um dos seus diferenciais. As dúvidas durante a implantação foram poucas devido ao bom trabalho feito pela equipe. E se temos alguma dúvida durante as rotinas, isso é resolvido na hora de forma online.',
        profile: 'assets/images/users/1.jpg',
        status: 'Pending',
        class: 'info',
        date: '18/04/2020 às 18:00:00 hs'
      },
      {
        name: 'Jorge Luiz',
        content: 'O processo de implantação foi muito bem planejado. Todas as parametrizações foram realizadas, bem como treinamentos específicos para cada área. O grande diferencial da solução é confiabilidade. Ganhamos muito com a automatização nos processos, vendas de seguros, venda de viagens, kits de produtos, produto composto, desconto progressivo, enfim, só evoluímos em produtividade.',
        profile: 'assets/images/users/d2.jpg',
        status: 'Approved',
        class: 'light-success',
        date: '18/04/2020 às 15:00:00 hs'
      },
      {
        name: 'Bruno César',
        content: 'Os principais benefícios deste software para os corretores são a confiabilidade nas informações geradas e a inovação constante no processo de vendas de seguro. Com recursos inovadores, a solução facilita o dia a dia do operador primário do sistema até o mais alto nível de gerência de uma corretora.',
        profile: 'assets/images/users/d1.jpg',
        status: 'Pending',
        class: 'danger',
        date: '18/04/2020 às 14:00:00 hs'
      },
      {
        name: 'Annie',
        content: 'Este applicativo proporciona à nossa empresa de corretores extrema agilidade em seus atendimentos, sejam eles remotos, por telefone ou chat e assume total responsabilidade e compromisso perante ao fisco de cada estado.',
        profile: 'assets/images/users/2.jpg',
        status: 'Pending',
        class: 'info',
        date: '18/04/2020 às 12:00:00 hs'
      },
      {
        name: 'Victor Lourenço',
        content: 'Os prazos propostos no início do projeto foram respeitados, passando segurança e transparência para meus clientes.',
        profile: 'assets/images/users/5.jpg',
        status: 'Pending',
        class: 'info',
        date: '18/04/2020 às 11:00:00 hs'
      }
    ];

    mymessages: any[] =
    [
      {
        useravatar: 'assets/images/users/1.jpg',
        status: 'online',
        from: 'Addae do Carmo',
        subject: 'Já chegou na reunião ?',
        time: '9:30 AM'
      },
      {
        useravatar: 'assets/images/users/2.jpg',
        status: 'busy',
        from: 'Annie',
        subject: 'Que ótimo aplicativo',
        time: '9:10 AM'
      },
      {
        useravatar: 'assets/images/users/3.jpg',
        status: 'away',
        from: 'Victor Lourenço',
        subject: 'Já chegou na reunião ?',
        time: '9:08 AM'
      },
      {
        useravatar: 'assets/images/users/4.jpg',
        status: 'busy',
        from: 'Helela Lopes',
        subject: 'Vou indicar a um amigo',
        time: '9:10 AM'
      },
      {
        useravatar: 'assets/images/users/6.jpg',
        status: 'away',
        from: 'João Lopes',
        subject: 'Já chegou na reunião ?',
        time: '9:08 AM'
      },
      {
        useravatar: 'assets/images/users/7.jpg',
        status: 'busy',
        from: 'Ricardo Bomtempo',
        subject: 'Vou indicar a um amigo',
        time: '9:10 AM'
      },
      {
        useravatar: 'assets/images/users/8.jpg',
        status: 'away',
        from: 'Renato Bomtempo',
        subject: 'Vou indicar a um amigo',
        time: '9:08 AM'
      },
      {
        useravatar: 'assets/images/users/6.jpg',
        status: 'offline',
        from: 'João luiz',
        subject: 'Já chegou na reunião ?',
        time: '9:00 AM'
      }
    ];

}
export interface Element {
  name: string;
  position: string;
  viagens: number;
  email: string;
  nascimento: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', viagens: 150, email: 'addae@gmail.com', nascimento: '06/07/1977'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', viagens: 250, email: 'jorge@gmail.com', nascimento: '06/07/1977'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', viagens: 300, email: 'bruno@gmail.com', nascimento: '06/07/1977'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', viagens: 10, email: 'annie@gmail.com', nascimento: '06/07/1977'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', viagens: 20, email: 'victor@gmail.com', nascimento: '06/07/1977'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', viagens: 30, email: 'guilherme@gmail.com', nascimento: '06/07/1977'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', viagens: 100, email: 'fernanda@gmail.com', nascimento: '06/07/1977'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', viagens: 150, email: 'gustavo@gmail.com', nascimento: '06/07/1977'},
];
