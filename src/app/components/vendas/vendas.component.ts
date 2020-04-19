import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements AfterViewInit {


  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns = ['position', 'name', 'destino', 'email', 'saida', 'seguro', 'tipoSeguro', 'valorSeguro', 'valorViagem', 'promocao'];
  dataSource = new MatTableDataSource<Cliente>(ELEMENT_DATA);
  @ViewChild ( MatPaginator ) paginator: MatPaginator;

  getValorSeguro() {
    return ELEMENT_DATA.map(t => t.valorSeguro).reduce((acc, value) => acc + value, 0);
  }

  getValorViagem() {
    return ELEMENT_DATA.map(t => t.valorViagem).reduce((acc, value) => acc + value, 0);
  }
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
  promocao: string;
}

const ELEMENT_DATA: Cliente[] = [
  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},

  {position: 'assets/images/users/1.jpg', name: 'Addae do Carmo', destino: 'EUA', email: 'addae@gmail.com', saida: '12/01/2021', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d2.jpg', name: 'Jorge Luiz', destino: 'Japão', email: 'jorge@gmail.com', saida: '14/02/2020', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/d1.jpg', name: 'Bruno César', destino: 'Australia', email: 'bruno@gmail.com', saida: '13/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/2.jpg', name: 'Annie', destino: 'China', email: 'annie@gmail.com', saida: '22/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/5.jpg', name: 'Victor Lourenço', destino: 'Arabia Saudita', email: 'victor@gmail.com', saida: '25/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/6.jpg', name: 'Guilherme Costa Lopes', destino: 'EUA', email: 'guilherme@gmail.com', saida: '28/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/7.jpg', name: 'Fernanda Maria da Costa', destino: 'EUA', email: 'fernanda@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
  {position: 'assets/images/users/8.jpg', name: 'Gustavo Costa Lopes', destino: 'Itália', email: 'gustavo@gmail.com', saida: '12/01/2019', seguro: 'sim', tipoSeguro: 'Master', valorSeguro: 550.00, valorViagem: 12500, promocao: 'sim'},
];
