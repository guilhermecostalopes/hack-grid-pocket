import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns = ['position', 'name', 'titulo', 'dataHora'];
  dataSource = new MatTableDataSource<Cliente>(ELEMENT_DATA);
  @ViewChild ( MatPaginator ) paginator: MatPaginator;

}

export interface Cliente {
  name: string;
  position: string;//destino
  titulo: string;
  dataHora: string;
}

const ELEMENT_DATA: Cliente[] = [
  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', titulo: 'Aguardando na reunião', dataHora: '19/04/2020 às 20:00'},
];
