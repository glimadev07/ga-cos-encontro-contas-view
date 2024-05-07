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
import { DetalhesComponent } from './components/detalhes.component';
import { RouterModule, Routes } from '@angular/router';
import { SinistroModule } from '../sinistro/sinistro.module';
import { ApoliceModule } from '../apolice/apolice.module';
import { SimulacoesLiquidacoesModule } from '../simulacoes-liquidacoes/simulacoes-liquidacoes.module';
import { ComissaoModule } from '../comissao/comissao.module';


const routes: Routes = [
  { path: 'detalhes', component: DetalhesComponent},
];

@NgModule({
  declarations: [
    DetalhesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSliderModule,
    FormsModule,
    RouterModule,
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
    SinistroModule,
    ApoliceModule,
    SimulacoesLiquidacoesModule,
    ComissaoModule
  ],
  exports: [
    DetalhesComponent
  ]
})
export class DetalhesModule { }


