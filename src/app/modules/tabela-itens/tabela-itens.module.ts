import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelaItensRoutingModule } from './tabela-itens-routing.module';
import { TabelaItensComponent } from './tabela-itens.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabelaComponent } from './components/tabela/tabela.component';


@NgModule({
  declarations: [
    TabelaItensComponent,
    TabelaComponent
  ],
  imports: [
    CommonModule,
    TabelaItensRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TabelaItensModule { }
