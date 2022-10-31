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
  {
    path: 'tabela-paginada',
    loadChildren: () => import('./modules/paginated-table/paginated-table.module').then(m => m.PaginatedTableModule)
  },
  {
    path: 'tabela-paginada-async',
    loadChildren: () => import('./modules/paginated-table-async/paginated-table-async.module').then(m => m.PaginatedTableAsyncModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
