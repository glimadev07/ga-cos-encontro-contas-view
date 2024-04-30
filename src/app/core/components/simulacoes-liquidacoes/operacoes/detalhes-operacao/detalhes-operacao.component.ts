import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const mocks = [
  {
    cd: 'xxxxxxxxxx',
    nrOrdem: 'xxxxxxxxxx',
    numero: 'xxxxxxxxxx',
    sinistro: 'xxxxxxxxxx',
    dtPgPlat: 'xxxxxxxxxx',
    cliente: 'xxxxxxxxxx'
  }
];


@Component({
  selector: 'app-detalhes-operacao',
  templateUrl: './detalhes-operacao.component.html',
  styleUrls: ['./detalhes-operacao.component.scss']
})
export class DetalhesOperacaoComponent implements OnInit {

  displayedColumns: string[] = ['cd', 'nrOrdem', 'numero', 'sinistro', 'dtPgPlat', 'cliente'];
  dataSource = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = mocks;
  }
}
