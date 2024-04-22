import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cosseguradora-modal',
  templateUrl: './cosseguradora-modal.component.html',
  styleUrls: ['./cosseguradora-modal.component.scss']
})
export class CosseguradoraModalComponent implements OnInit {

  dateString!: string;
  today: any;
  fechamento: any;
  dataSelecionada?: Date;

  constructor(public dialogRef: MatDialogRef<CosseguradoraModalComponent>
  ) { }

  ngOnInit(): void {
  }

  fecharModal(): void {
    this.dialogRef.close();
  }
}
