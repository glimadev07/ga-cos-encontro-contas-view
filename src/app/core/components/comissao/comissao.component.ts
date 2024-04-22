import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const mocks = [
  {
    premio: 'xxxxxxxxxx',
    comissao: 'xxxxxxxxxx',
    proLabore: 'xxxxxxxxxx',
    agenciamento: 'xxxxxxxxxx',
    rdo: 'xxxxxxxxxx',
    rdoCosseguradora: 'xxxxxxxxxx'
  }
];

@Component({
  selector: 'app-comissao',
  templateUrl: './comissao.component.html',
  styleUrls: ['./comissao.component.scss']
})
export class ComissaoComponent implements OnInit {

  displayedColumns: string[] = ['premio','comissao', 'proLabore', 'agenciamento', 'rdo', 'rdoCosseguradora'];
  dataSource = new MatTableDataSource<any>([]);

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = mocks;
  }

}
