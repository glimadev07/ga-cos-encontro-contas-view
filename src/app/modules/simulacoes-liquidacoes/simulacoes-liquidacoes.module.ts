import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { SimulacoesLiquidacoesComponent } from './components/simulacoes-liquidacoes.component';
import { SimulacoesComponent } from './components/simulacoes/simulacoes.component';
import { OperacoesComponent } from './components/operacoes/operacoes.component';
import { CorrecoesMonetariasPrevistaComponent } from './components/correcoes-monetarias-prevista/correcoes-monetarias-prevista.component';
import { SimulacoesModalComponent } from './components/correcoes-monetarias-prevista/simulacoes-modal/simulacoes-modal.component';
import { SimulacoesModalResultComponent } from './components/correcoes-monetarias-prevista/simulacoes-modal-result/simulacoes-modal-result.component';
import { DetalhesOperacaoComponent } from './components/operacoes/detalhes-operacao/detalhes-operacao.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: SimulacoesLiquidacoesComponent, children: [
    { path: 'correcoesMonetarias', component: CorrecoesMonetariasPrevistaComponent },
    { path: 'operacoes', component: OperacoesComponent },
    { path: 'simulacoes', component: SimulacoesComponent },
  ]},
];

@NgModule({
  declarations: [
    SimulacoesLiquidacoesComponent,
    SimulacoesComponent,
    OperacoesComponent,
    DetalhesOperacaoComponent,
    CorrecoesMonetariasPrevistaComponent,
    SimulacoesModalComponent,
    SimulacoesModalResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSliderModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatStepperModule,
    MatPaginatorModule,
  ],
  exports: [
    SimulacoesLiquidacoesComponent,
    SimulacoesComponent,
    OperacoesComponent,
    DetalhesOperacaoComponent,
    CorrecoesMonetariasPrevistaComponent,
    SimulacoesModalComponent,
    SimulacoesModalResultComponent
  ]
})
export class SimulacoesLiquidacoesModule { }
