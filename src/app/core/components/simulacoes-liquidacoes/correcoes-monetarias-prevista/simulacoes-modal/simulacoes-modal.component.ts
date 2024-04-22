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
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  fecharModal(): void {
    this.dialogRef.close();
  }

  openModalResult() {

    this.dialog.open(SimulacoesModalResultComponent, {
      panelClass: 'myapp-no-padding-dialog',
      maxWidth: '95vw',
      width: '100%',
      height: '95%',

    });
  }


  dateChanged(event: any) {
    this.dataSelecionada = event.value;
  }

}
