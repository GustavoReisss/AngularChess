import { FormsModule } from '@angular/forms';
import { PaginatedTableComponent } from './paginated-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatedTableRoutingModule } from './paginated-table-routing.module';


@NgModule({
  declarations: [
    PaginatedTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginatedTableRoutingModule
  ]
})
export class PaginatedTableModule { }
