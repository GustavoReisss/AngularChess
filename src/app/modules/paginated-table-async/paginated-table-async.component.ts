import { DataService } from './../../shared/services/data/data.service';
import { Component } from '@angular/core';
import { BehaviorSubject, delay, map, mergeMap, of } from 'rxjs';

interface data {
  id: number,
  name: string
}

@Component({
  selector: 'app-paginated-table-async',
  templateUrl: './paginated-table-async.component.html',
  styleUrls: ['./paginated-table-async.component.scss']
})
export class PaginatedTableAsyncComponent {

  // page controls settings
  page = 1
  numPages = 1

  currentPage$: BehaviorSubject<any> = new BehaviorSubject<any>(1)

  currentPageData$ = this.currentPage$.pipe(
    mergeMap(currentPage => this.dataService.getDataPaginated('clients', currentPage)
      .pipe(map(response => {
        this.numPages = response.totalPages
        return response.data
      })))
  )
  
  constructor(
    private dataService: DataService
  ) { }

  canChangePage(num: number) {
    const nextValue = num + this.currentPage$.value
    return nextValue > 0 && nextValue <= this.numPages
  }

  changePage(num: number) {
    if(!this.canChangePage(num)) return
    this.currentPage$.next( num + this.currentPage$.value)
  }

}
