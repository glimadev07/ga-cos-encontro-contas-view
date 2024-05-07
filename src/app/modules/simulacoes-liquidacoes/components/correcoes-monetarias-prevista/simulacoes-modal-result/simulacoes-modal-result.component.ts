import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  ramo: number;
  cAceito: number;
  cCecido: number;
  cAceito2: number;
  cCecido2: number;
  cAceito3: number;
  cCecido3: number;
  totalPagar: number;
  totalReceber: number;
  resultadoFinal: number;
}

const mocks: PeriodicElement[] = [
  { ramo: 1, cAceito: 280, cCecido: 200, cAceito2: 280, cCecido2: 123, cAceito3: 123, cCecido3: 123, totalPagar: 123, totalReceber: 123, resultadoFinal: 123 },
  {
    ramo: 2,
    cAceito: 900,
    cCecido: 200,
    cAceito2: 900,
    cCecido2: 456,
    cAceito3: 456,
    cCecido3: 456,
    totalPagar: 456,
    totalReceber: 456,
    resultadoFinal: 456
  },
  {
    ramo: 3,
    cAceito: 789,
    cCecido: 200,
    cAceito2: 789,
    cCecido2: 789,
    cAceito3: 789,
    cCecido3: 789,
    totalPagar: 789,
    totalReceber: 789,
    resultadoFinal: 789
  },
  {
    ramo: 4,
    cAceito: 290,
    cCecido: 200,
    cAceito2: 290,
    cCecido2: 101,
    cAceito3: 101,
    cCecido3: 101,
    totalPagar: 101,
    totalReceber: 101,
    resultadoFinal: 101
  },
  {
    ramo: 5,
    cAceito: 172,
    cCecido: 200,
    cAceito2: 172,
    cCecido2: 112,
    cAceito3: 112,
    cCecido3: 112,
    totalPagar: 112,
    totalReceber: 112,
    resultadoFinal: 112
  },
  {
    ramo: 6,
    cAceito: 80,
    cCecido: 200,
    cAceito2: 80,
    cCecido2: 131,
    cAceito3: 131,
    cCecido3: 131,
    totalPagar: 131,
    totalReceber: 131,
    resultadoFinal: 131
  },
  {
    ramo: 7,
    cAceito: 9908,
    cCecido: 200,
    cAceito2: 9908,
    cCecido2: 314,
    cAceito3: 314,
    cCecido3: 314,
    totalPagar: 314,
    totalReceber: 314,
    resultadoFinal: 314
  },
];


@Component({
  selector: 'app-simulacoes-modal-result',
  templateUrl: './simulacoes-modal-result.component.html',
  styleUrls: ['./simulacoes-modal-result.component.scss']
})
export class SimulacoesModalResultComponent implements OnInit {

  displayedColumns: string[] = [];
  displayedColumns2: string[] = []
  displayedColumns3: string[] = []
  displayedColumns4: string[] = []
  dataSource = new MatTableDataSource<PeriodicElement>(mocks);
  selection = new SelectionModel<PeriodicElement>(true, []);
  mocksCalculator: any;
  data: number[] = [];

  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() {
  }

  ngOnInit(): void {
    this.displayedColumns = ['ramo', 'cAceito', 'cCecido', 'cAceito2', 'cCecido2', 'cAceito3', 'cCecido3', 'totalPagar', 'totalReceber', 'resultadoFinal'];
    this.displayedColumns2 = this.displayedColumns.map(x => `f2_${x}`);
    this.displayedColumns3 = this.displayedColumns.map(x => `f3_${x}`);
    this.displayedColumns4 = this.displayedColumns.map(x => `f4_${x}`);
    this.dataSource.data = mocks;
    this.mocksCalculator = mocks;
    this.getTotalCost()
  }



  getTotalCost() {
    const array = ['cAceito', 'cCecido', 'cAceito2', 'cCecido2', 'cAceito3', 'cCecido3', 'totalPagar', 'totalReceber', 'resultadoFinal'];

    let soma = 0;

    array.forEach((element) => {
      this.mocksCalculator.map((mock: any) => {
        soma += mock[element];
      });
      this.data.push(soma);
      soma = 0;
    });
    return soma;
  }

  getMinValue(columnName: any) {
    return this.mocksCalculator
      .map((t: { [x: string]: any; }) => t[columnName])
      .reduce((acc: number, value: number) => Math.min(acc, value));
  }

  getMinItem(columnName: any) {
    columnName = columnName.replace('f2_', '').replace('f3_', '').replace('f4_', '')
    return this.mocksCalculator
      .map((t: { [x: string]: any; }) => t[columnName])
      .reduce((acc: any, value: any) => acc + value);
  }

  countMinItem(columnName: any) {
    columnName = columnName.replace('f2_', '').replace('f3_', '').replace('f4_', '')
    return this.mocksCalculator
      .map((t: { [x: string]: any; }) => t[columnName])
      .reduce((acc: any, value: any) => acc + value);
  }


  onRowClick(row: any, $event: any) {
    $event.stopPropagation();
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
