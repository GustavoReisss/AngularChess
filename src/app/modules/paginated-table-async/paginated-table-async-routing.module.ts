import { PaginatedTableAsyncComponent } from './paginated-table-async.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PaginatedTableAsyncComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginatedTableAsyncRoutingModule { }
