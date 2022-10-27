import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'xadrez',
    loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./modules/formulario/formulario.module').then(m => m.FormularioModule)
  },
  {
    path: 'tabela',
    loadChildren: () => import('./modules/tabela-itens/tabela-itens.module').then(m => m.TabelaItensModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
