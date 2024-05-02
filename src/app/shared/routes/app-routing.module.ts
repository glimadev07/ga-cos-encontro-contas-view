import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CosseguroComponent } from 'src/app/modules/cosseguro/components/cosseguro.component';
import { DetalhesComponent } from 'src/app/modules/detalhes/components/detalhes.component';
import { SimulacoesModalResultComponent } from 'src/app/modules/simulacoes-liquidacoes/components/correcoes-monetarias-prevista/simulacoes-modal-result/simulacoes-modal-result.component';
import { SimulacoesLiquidacoesComponent } from 'src/app/modules/simulacoes-liquidacoes/components/simulacoes-liquidacoes.component';

const routes: Routes = [
  { path: '', redirectTo: '/cosseguro', pathMatch: 'full' },
  { path: 'cosseguro', component: CosseguroComponent},
  { path: 'detalhes', component: DetalhesComponent},
  { path: 'simulacoes', component: SimulacoesLiquidacoesComponent },
  { path: 'resultado', component: SimulacoesModalResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
