import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

const mocks = [
  {
    numero: 1,
    tipo: 'Vida',
    dtStatus: '01/01/2021',
    ramo: 'Vida',
    apoliceSubApol: '456',
    endosso: '789',
    parc: '321',
    sinistrado: '654',
    valor: '987',
    cd: '012'
  },
  {
    numero: 2,
    tipo: 'Saúde',
    dtStatus: '02/02/2021',
    ramo: 'Saúde',
    apoliceSubApol: '246',
    endosso: '579',
    parc: '135',
    sinistrado: '864',
    valor: '951',
    cd: '203'
  },
  {
    numero: 3,
    tipo: 'Automóvel',
    dtStatus: '03/03/2021',
    ramo: 'Automóvel',
    apoliceSubApol: '789',
    endosso: '123',
    parc: '456',
    sinistrado: '789',
    valor: '321',
    cd: '654'
  },
  {
    numero: 4,
    tipo: 'Casa',
    dtStatus: '04/04/2021',
    ramo: 'Casa',
    apoliceSubApol: '135',
    endosso: '468',
    parc: '579',
    sinistrado: '357',
    valor: '246',
    cd: '801'
  },
  {
    numero: 5,
    tipo: 'Educação',
    dtStatus: '05/05/2021',
    ramo: 'Educação',
    apoliceSubApol: '357',
    endosso: '690',
    parc: '802',
    sinistrado: '124',
    valor: '579',
    cd: '357'
  },
  {
    numero: 6,
    tipo: 'Viagem',
    dtStatus: '06/06/2021',
    ramo: 'Viagem',
    apoliceSubApol: '680',
    endosso: '913',
    parc: '246',
    sinistrado: '802',
    valor: '135',
    cd: '913'
  },
  {
    numero: 7,
    tipo: 'Investimento',
    dtStatus: '07/07/2021',
    ramo: 'Investimento',
    apoliceSubApol: '913',
    endosso: '246',
    parc: '468',
    sinistrado: '357',
    valor: '690',
    cd: '246'
  },
  {
    numero: 8,
    tipo: 'Alimentação',
    dtStatus: '08/08/2021',
    ramo: 'Alimentação',
    apoliceSubApol: '246',
    endosso: '579',
    parc: '802',
    sinistrado: '124',
    valor: '579',
    cd: '579'
  },
  {
    numero: 9,
    tipo: 'Pet',
    dtStatus: '09/09/2021',
    ramo: 'Pet',
    apoliceSubApol: '913',
    endosso: '802',
    parc: '357',
    sinistrado: '680',
    valor: '468',
    cd: '802'
  },
  {
    numero: 10,
    tipo: 'Previdência Privada',
    dtStatus: '10/10/2021',
    ramo: 'Previdência Privada',
    apoliceSubApol: '468',
    endosso: '246',
    parc: '913',
    sinistrado: '579',
    valor: '357',
    cd: '124'
  },
  {
    numero: 11,
    tipo: 'Responsabilidade Civil',
    dtStatus: '11/11/2021',
    ramo: 'Responsabilidade Civil',
    apoliceSubApol: '913',
    endosso: '802',
    parc: '357',
    sinistrado: '680',
    valor: '468',
    cd: '802'
  },
  {
    numero: 12,
    tipo: 'Dental',
    dtStatus: '12/12/2021',
    ramo: 'Dental',
    apoliceSubApol: '468',
    endosso: '246',
    parc: '913',
    sinistrado: '579',
    valor: '357',
    cd: '124'
  },
  {
    numero: 13,
    tipo: 'Riscos Diversos',
    dtStatus: '13/01/2022',
    ramo: 'Riscos Diversos',
    apoliceSubApol: '357',
    endosso: '246',
    parc: '802',
    sinistrado: '579',
    valor: '357',
    cd: '579'
  }
];


@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.scss']
})
export class OperacoesComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'tipo', 'dtStatus', 'ramo','apoliceSubApol','endosso','parc','sinistrado','valor','cd'];
  dataSource = new MatTableDataSource<any>([]);

  pageSizeOptions: number[] = [5, 10, 20];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = mocks;
  }

}
