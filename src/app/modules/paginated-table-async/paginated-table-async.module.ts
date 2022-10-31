import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatedTableAsyncRoutingModule } from './paginated-table-async-routing.module';
import { PaginatedTableAsyncComponent } from './paginated-table-async.component';


@NgModule({
  declarations: [
    PaginatedTableAsyncComponent
  ],
  imports: [
    CommonModule,
    PaginatedTableAsyncRoutingModule,
    FormsModule
  ]
})
export class PaginatedTableAsyncModule { }
