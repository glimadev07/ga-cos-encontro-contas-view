import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CosseguroComponent } from 'src/app/core/components/cosseguro/cosseguro.component';
import { HomeComponent } from 'src/app/core/components/home/home.component';
import { SimulacoesLiquidacoesComponent } from 'src/app/core/components/simulacoes-liquidacoes/simulacoes-liquidacoes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'simulacoes', component: SimulacoesLiquidacoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
