import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

const mocks = [
  {
    numero: 1,
    sts: 'Vida',
    dtStatus: '01/01/2021',
    tpSim: 'Vida',
    dtPrevLiq: '05/04/2024',
    pagar: '500',
    receber: '800',
    resultado: '300',
    pr: '200',
    fatura: '150',
    obrigacao: '100',
    tpLiq: 'Transferência Bancária'
  },
  {
    numero: 2,
    sts: 'Saúde',
    dtStatus: '15/02/2021',
    tpSim: 'Saúde',
    dtPrevLiq: '10/05/2024',
    pagar: '700',
    receber: '900',
    resultado: '200',
    pr: '300',
    fatura: '200',
    obrigacao: '150',
    tpLiq: 'Cheque'
  },
  {
    numero: 3,
    sts: 'Automóvel',
    dtStatus: '20/03/2021',
    tpSim: 'Automóvel',
    dtPrevLiq: '20/06/2024',
    pagar: '1000',
    receber: '1200',
    resultado: '200',
    pr: '400',
    fatura: '250',
    obrigacao: '200',
    tpLiq: 'PIX'
  },
  {
    numero: 4,
    sts: 'Casa',
    dtStatus: '10/04/2021',
    tpSim: 'Casa',
    dtPrevLiq: '25/07/2024',
    pagar: '1200',
    receber: '1500',
    resultado: '300',
    pr: '500',
    fatura: '300',
    obrigacao: '250',
    tpLiq: 'Transferência Bancária'
  },
  {
    numero: 5,
    sts: 'Educação',
    dtStatus: '05/05/2021',
    tpSim: 'Educação',
    dtPrevLiq: '15/08/2024',
    pagar: '800',
    receber: '1000',
    resultado: '200',
    pr: '300',
    fatura: '150',
    obrigacao: '100',
    tpLiq: 'Cheque'
  },
  {
    numero: 6,
    sts: 'Viagem',
    dtStatus: '20/06/2021',
    tpSim: 'Viagem',
    dtPrevLiq: '30/09/2024',
    pagar: '1500',
    receber: '1800',
    resultado: '300',
    pr: '600',
    fatura: '400',
    obrigacao: '300',
    tpLiq: 'PIX'
  },
  {
    numero: 7,
    sts: 'Investimento',
    dtStatus: '15/07/2021',
    tpSim: 'Investimento',
    dtPrevLiq: '10/10/2024',
    pagar: '2000',
    receber: '2500',
    resultado: '500',
    pr: '800',
    fatura: '500',
    obrigacao: '400',
    tpLiq: 'TED'
  },
  {
    numero: 8,
    sts: 'Alimentação',
    dtStatus: '30/08/2021',
    tpSim: 'Alimentação',
    dtPrevLiq: '20/11/2024',
    pagar: '500',
    receber: '700',
    resultado: '200',
    pr: '300',
    fatura: '200',
    obrigacao: '150',
    tpLiq: 'Transferência Bancária'
  }
];


@Component({
  selector: 'app-simulacoes',
  templateUrl: './simulacoes.component.html',
  styleUrls: ['./simulacoes.component.scss']
})
export class SimulacoesComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'sts', 'dtStatus', 'tpSim', 'dtPrevLiq', 'pagar', 'receber', 'resultado', 'pr', 'fatura', 'obrigacao', 'tpLiq'];
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
