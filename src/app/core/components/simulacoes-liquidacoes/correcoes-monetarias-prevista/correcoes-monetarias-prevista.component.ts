import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SimulacoesModalComponent } from './simulacoes-modal/simulacoes-modal.component';


const mocks = [
  {
    seq: 1,
    tipo: 'Vida',
    dtCorMon: '01/01/2021',
    oprOrig: 'teste',
    ramo: 'Vida',
    apoliceSubApol: '456',
    endosso: '789',
    parc: '321',
    sinistrado: '654',
    valor: '987',
    cd: '012'
  },
  {
    seq: 2,
    tipo: 'Saúde',
    dtCorMon: '02/02/2021',
    oprOrig: 'exemplo',
    ramo: 'Saúde',
    apoliceSubApol: '246',
    endosso: '579',
    parc: '135',
    sinistrado: '864',
    valor: '951',
    cd: '203'
  },
  {
    seq: 3,
    tipo: 'Automóvel',
    dtCorMon: '03/03/2021',
    oprOrig: 'amostra',
    ramo: 'Automóvel',
    apoliceSubApol: '789',
    endosso: '123',
    parc: '456',
    sinistrado: '789',
    valor: '321',
    cd: '654'
  },
  {
    seq: 4,
    tipo: 'Casa',
    dtCorMon: '04/04/2021',
    oprOrig: 'amostra',
    ramo: 'Casa',
    apoliceSubApol: '135',
    endosso: '468',
    parc: '579',
    sinistrado: '357',
    valor: '246',
    cd: '801'
  },
  {
    seq: 5,
    tipo: 'Educação',
    dtCorMon: '05/05/2021',
    oprOrig: 'teste',
    ramo: 'Educação',
    apoliceSubApol: '357',
    endosso: '690',
    parc: '802',
    sinistrado: '124',
    valor: '579',
    cd: '357'
  },
  {
    seq: 6,
    tipo: 'Viagem',
    dtCorMon: '06/06/2021',
    oprOrig: 'exemplo',
    ramo: 'Viagem',
    apoliceSubApol: '680',
    endosso: '913',
    parc: '246',
    sinistrado: '802',
    valor: '135',
    cd: '913'
  },
  {
    seq: 7,
    tipo: 'Investimento',
    dtCorMon: '07/07/2021',
    oprOrig: 'amostra',
    ramo: 'Investimento',
    apoliceSubApol: '913',
    endosso: '246',
    parc: '468',
    sinistrado: '357',
    valor: '690',
    cd: '246'
  },
  {
    seq: 8,
    tipo: 'Alimentação',
    dtCorMon: '08/08/2021',
    oprOrig: 'teste',
    ramo: 'Alimentação',
    apoliceSubApol: '246',
    endosso: '579',
    parc: '802',
    sinistrado: '124',
    valor: '579',
    cd: '579'
  },
  {
    seq: 9,
    tipo: 'Pet',
    dtCorMon: '09/09/2021',
    oprOrig: 'exemplo',
    ramo: 'Pet',
    apoliceSubApol: '913',
    endosso: '802',
    parc: '357',
    sinistrado: '680',
    valor: '468',
    cd: '802'
  },
  {
    seq: 10,
    tipo: 'Previdência Privada',
    dtCorMon: '10/10/2021',
    oprOrig: 'amostra',
    ramo: 'Previdência Privada',
    apoliceSubApol: '468',
    endosso: '246',
    parc: '913',
    sinistrado: '579',
    valor: '357',
    cd: '124'
  },
  {
    seq: 11,
    tipo: 'Responsabilidade Civil',
    dtCorMon: '11/11/2021',
    oprOrig: 'teste',
    ramo: 'Responsabilidade Civil',
    apoliceSubApol: '913',
    endosso: '802',
    parc: '357',
    sinistrado: '680',
    valor: '468',
    cd: '802'
  },
  {
    seq: 12,
    tipo: 'Dental',
    dtCorMon: '12/12/2021',
    oprOrig: 'exemplo',
    ramo: 'Dental',
    apoliceSubApol: '468',
    endosso: '246',
    parc: '913',
    sinistrado: '579',
    valor: '357',
    cd: '124'
  },
  {
    seq: 13,
    tipo: 'Riscos Diversos',
    dtCorMon: '13/01/2022',
    oprOrig: 'amostra',
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
  selector: 'app-correcoes-monetarias-prevista',
  templateUrl: './correcoes-monetarias-prevista.component.html',
  styleUrls: ['./correcoes-monetarias-prevista.component.scss']
})
export class CorrecoesMonetariasPrevistaComponent implements OnInit {

  displayedColumns: string[] = ['seq', 'tipo', 'dtCorMon', 'oprOrig', 'ramo','apoliceSubApol','endosso','parc','sinistrado','valor','cd'];
  dataSource = new MatTableDataSource<any>([]);
  mocksCalculator: any;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.data = mocks;
    this.mocksCalculator = mocks;
  }


  openModal(): void {
    this.dialog.open(SimulacoesModalComponent, {
      panelClass: 'myapp-no-padding-dialog',
      width: '400px',
        });
  }




}
