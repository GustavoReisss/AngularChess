import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/game/game.module').then(m => m.GameModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./modules/formulario/formulario.module').then(m => m.FormularioModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
