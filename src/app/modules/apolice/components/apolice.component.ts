import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const mocks = [
  {
    apoliceSubApolice: 'xxxxxxxxxx',
    prod: 'xxxxxxxxxx',
    endosso: 'xxxxxxxxxx',
    cliente: 'xxxxxxxxxx',
    dtIniVigencia: 'xxxxxxxxxx',
    dtFimVigencia: 'xxxxxxxxxx',
    nrParcela: 'xxxxxxxxxx',
    dtVencimento: 'xxxxxxxxxx',
    valorParcela: 'xxxxxxxxxx',
    dtBaixa: 'xxxxxxxxxx'
  }
];


@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrls: ['./apolice.component.scss']
})
export class ApoliceComponent implements OnInit {

  displayedColumns: string[] = ['apoliceSubApolice','prod', 'endosso', 'cliente', 'dtIniVigencia', 'dtFimVigencia', 'nrParcela', 'dtVencimento', 'valorParcela', 'dtBaixa'];
  dataSource = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = mocks;
  }

}
