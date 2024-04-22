import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const mocks = [
  {
    numero: 'xxxxxxxxxx',
    dtOcorrencia: 'xxxxxxxxxx',
    oficial: 'xxxxxxxxxx',
    numObri: 'xxxxxxxxxx',
    numAprov: 'xxxxxxxxxx',
    valorPago: 'xxxxxxxxxx',
    dtPagamento: 'xxxxxxxxxx'
  }
];

@Component({
  selector: 'app-sinistro',
  templateUrl: './sinistro.component.html',
  styleUrls: ['./sinistro.component.scss']
})
export class SinistroComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'dtOcorrencia', 'oficial', 'numObri', 'numAprov', 'valorPago', 'dtPagamento'];
  dataSource = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = mocks;
  }

}
