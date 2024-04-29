import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SimulacoesModalResultComponent } from '../simulacoes-modal-result/simulacoes-modal-result.component';



@Component({
  selector: 'app-simulacoes-modal',
  templateUrl: './simulacoes-modal.component.html',
  styleUrls: ['./simulacoes-modal.component.scss']
})
export class SimulacoesModalComponent implements OnInit {

  dateString!: string;
  today: any;
  fechamento: any;
  dataSelecionada?: Date;

  constructor(public dialogRef: MatDialogRef<SimulacoesModalComponent>,
  ) { }

  ngOnInit(): void {
  }
  fecharModal(): void {
    this.dialogRef.close();
  }

  openModalResult() {
    this.fecharModal();
  }


  dateChanged(event: any) {
    this.dataSelecionada = event.value;
  }

}
