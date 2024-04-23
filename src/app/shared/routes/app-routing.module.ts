import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesComponent } from 'src/app/core/components/detalhes/detalhes.component';
import { HomeComponent } from 'src/app/core/components/home/home.component';
import { SimulacoesLiquidacoesComponent } from 'src/app/core/components/simulacoes-liquidacoes/simulacoes-liquidacoes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'simulacoes', component: SimulacoesLiquidacoesComponent},
  {path: 'detalhes', component: DetalhesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
