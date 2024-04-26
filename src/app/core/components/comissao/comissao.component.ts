import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const mocks = [
  {
    status: 'ATV',
    tipoOperacao: '12 - 1',
    carta: '1234',
    dtStatus: '01/11/23',
    ramo: '3',
    apoliceSubapolice: '123653434'
  }
];

@Component({
  selector: 'app-comissao',
  templateUrl: './comissao.component.html',
  styleUrls: ['./comissao.component.scss']
})
export class ComissaoComponent implements OnInit {

  displayedColumns: string[] = ['status','tipoOperacao', 'carta', 'dtStatus', 'ramo', 'apoliceSubapolice'];
  dataSource = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = mocks;
  }

}
