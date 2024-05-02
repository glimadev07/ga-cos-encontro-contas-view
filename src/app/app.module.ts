import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../../src/app/shared/routes/app-routing.module';
import { AppComponent } from './app.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ComissaoModule } from './modules/comissao/comissao.module';
import { ApoliceModule } from './modules/apolice/apolice.module';
import { CosseguroModule } from './modules/cosseguro/cosseguro.module';
import { SinistroModule } from './modules/sinistro/sinistro.module';
import { SimulacoesLiquidacoesModule } from './modules/simulacoes-liquidacoes/simulacoes-liquidacoes.module';
import { DetalhesModule } from './modules/detalhes/detalhes.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ComissaoModule,
    ApoliceModule,
    CosseguroModule,
    SinistroModule,
    SimulacoesLiquidacoesModule,
    DetalhesModule,
    HomeModule
  ],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
