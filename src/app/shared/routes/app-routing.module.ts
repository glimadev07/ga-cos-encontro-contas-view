import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CosseguroComponent } from 'src/app/modules/cosseguro/components/cosseguro.component';
import { SimulacoesModalResultComponent } from 'src/app/modules/simulacoes-liquidacoes/components/correcoes-monetarias-prevista/simulacoes-modal-result/simulacoes-modal-result.component';


const routes: Routes = [
  { path: '', redirectTo: '/cosseguro', pathMatch: 'full' },
  { path: 'cosseguro', component: CosseguroComponent},
  { path: 'detalhe', loadChildren: () => import('../../modules/detalhes/detalhes.module').then(m => m.DetalhesModule)},
  { path: 'simulacoes', loadChildren: () => import('../../modules/simulacoes-liquidacoes/simulacoes-liquidacoes.module').then(m => m.SimulacoesLiquidacoesModule)},
  { path: 'simulacoes/correcoesMonetarias/resultado', component: SimulacoesModalResultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
