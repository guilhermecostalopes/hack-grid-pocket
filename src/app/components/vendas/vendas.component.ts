import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns = ['position', 'name', 'viagens', 'email', 'nascimento'];
    dataSource = new MatTableDataSource<Cliente>(ELEMENT_DATA);
    @ViewChild ( MatPaginator ) paginator: MatPaginator;

}

export interface Cliente {
  name: string;
  position: string;//destino
  destino: string;
  email: string;
  saida: string;
  seguro: string;
  tipoSeguro: string;
  valorSeguro: number;
  valorViagem: number;
}

const ELEMENT_DATA: Cliente[] = [
  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: '', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: '', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: '', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: '', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: '', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: '', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: '', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: '', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500},
];
