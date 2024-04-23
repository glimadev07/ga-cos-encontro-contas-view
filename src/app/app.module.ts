import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../src/app/shared/routes/app-routing.module';
import { AppComponent } from './app.component';
import { CosseguroComponent } from './core/components/cosseguro/cosseguro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CardCosseguroComponent } from './core/components/cosseguro/card-cosseguro/card-cosseguro.component';
import { CardCosseguradoraComponent } from './core/components/cosseguro/card-cosseguradora/card-cosseguradora.component';
import { SimulacoesLiquidacoesComponent } from './core/components/simulacoes-liquidacoes/simulacoes-liquidacoes.component';
import { SimulacoesComponent } from './core/components/simulacoes-liquidacoes/simulacoes/simulacoes.component';
import { OperacoesComponent } from './core/components/simulacoes-liquidacoes/operacoes/operacoes.component';
import { CorrecoesMonetariasPrevistaComponent } from './core/components/simulacoes-liquidacoes/correcoes-monetarias-prevista/correcoes-monetarias-prevista.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SimulacoesModalComponent } from './core/components/simulacoes-liquidacoes/correcoes-monetarias-prevista/simulacoes-modal/simulacoes-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { SimulacoesModalResultComponent } from './core/components/simulacoes-liquidacoes/correcoes-monetarias-prevista/simulacoes-modal-result/simulacoes-modal-result.component'; // Importe o MatNativeDateModule
import { MatExpansionModule } from '@angular/material/expansion';
import { SinistroComponent } from './core/components/sinistro/sinistro.component';
import { ApoliceComponent } from './core/components/apolice/apolice.component';
import { ComissaoComponent } from './core/components/comissao/comissao.component';
import { DetalhesOperacaoComponent } from './core/components/simulacoes-liquidacoes/operacoes/detalhes-operacao/detalhes-operacao.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './core/components/home/home.component';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { DetalhesComponent } from './core/components/detalhes/detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    CosseguroComponent,
    CardCosseguroComponent,
    CardCosseguradoraComponent,
    SimulacoesLiquidacoesComponent,
    SimulacoesComponent,
    OperacoesComponent,
    CorrecoesMonetariasPrevistaComponent,
    SimulacoesModalComponent,
    SimulacoesModalResultComponent,
    SinistroComponent,
    ApoliceComponent,
    ComissaoComponent,
    DetalhesOperacaoComponent,
    HomeComponent,
    DetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
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
    MatStepperModule
  ],
  providers: [    {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
